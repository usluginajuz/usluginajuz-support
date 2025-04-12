import Header from "@/components/Header/Header";
import Logo from "@/components/Header/Logo";
import { supabase } from "@/utils/supabase";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EmailVerificationScreen() {
  const { access_token, type } = useLocalSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const verify = async () => {
      if (typeof access_token === "string" && type === "signup") {
        const { error } = await supabase.auth.exchangeCodeForSession(access_token);
        if (error) {
          setStatus("error");
        } else {
          setStatus("success");
        }
      } else {
        setStatus("error");
      }
    };

    verify();
  }, [access_token, type]);

  return (
    <>
      <Header>
          <Logo />
      </Header>
      <View style={styles.container}>
        {status === "loading" && <ActivityIndicator size="large" />}
        {status === "success" && (
          <>
            <Text style={styles.title}>✅ Konto zostało aktywowane</Text>
            <Text style={styles.text}>Możesz wrócić do aplikacji i się zalogować.</Text>
          </>
        )}
        {status === "error" && (
          <>
            <Text style={styles.title}>❌ Coś poszło nie tak</Text>
            <Text style={styles.text}>Link może być nieprawidłowy lub wygasł.</Text>
          </>
        )}

        {status !== "loading" && (
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text style={styles.link}>Powrót do strony głównej</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", alignItems: "center", backgroundColor:"#e7e4e1" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  text: { fontSize: 16, color: "#444", textAlign: "center", marginBottom: 20 },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e45e38",
  },
});
