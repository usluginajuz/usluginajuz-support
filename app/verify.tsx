import Header from "@/components/Header/Header";
import Logo from "@/components/Header/Logo";
import { supabase } from "@/utils/supabase";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EmailVerificationScreen() {
  // Pobieramy token i type (jeśli są przekazane w query)
  const { token, type } = useLocalSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Sprawdź, czy w części hash znajdują się parametry błędu
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const errorFromHash = hashParams.get("error");
    const errorDescription = hashParams.get("error_description");

    if (errorFromHash) {
      // Jeśli jest błąd, ustaw status "error" i zapamiętaj opis błędu
      setErrorMessage(errorDescription || "Wystąpił błąd podczas weryfikacji.");
      setStatus("error");
    } else if (typeof token === "string" && type === "signup") {
      // Jeśli mamy token i typ "signup", spróbuj wymienić token na sesję
      const verify = async () => {
        const { error } = await supabase.auth.exchangeCodeForSession(token);
        if (error) {
          setErrorMessage(error.message);
          setStatus("error");
        } else {
          setStatus("success");
        }
      };
      verify();
    } else {
      // Jeśli nie ma tokenu ani błędu w hash, zakładamy, że operacja zakończyła się sukcesem
      setStatus("success");
    }
  }, [token, type]);

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
            <Text style={styles.errorText}>{errorMessage}</Text>
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
  container: { 
    flex: 1, 
    padding: 24, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#e7e4e1" 
  },
  title: { 
    fontSize: 22, 
    fontWeight: "700", 
    marginBottom: 10, 
    textAlign: "center" 
  },
  text: { 
    fontSize: 16, 
    color: "#444", 
    textAlign: "center", 
    marginBottom: 20 
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#e45e38",
  },
});
