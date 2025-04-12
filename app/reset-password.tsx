import Header from "@/components/Header/Header";
import Logo from "@/components/Header/Logo";
import { useTheme } from "@/context/ThemeProvider";
import { ThemeColors } from "@/theme/colors";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function ResetPasswordScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handlePasswordReset = async () => {
    if (password !== confirm) {
      Alert.alert("Hasła się nie zgadzają");
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });
    
    setLoading(false);
    if (error) {
      Alert.alert("Błąd", error.message);
    } else {
      setResetSuccess(true);
      // Opcjonalnie możesz zresetować pola formularza:
      setPassword("");
      setConfirm("");
    }
  };

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar style="dark" />
        <ScrollView
          style={{ backgroundColor: colors.background }}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          bounces={false}
        >
          <View style={styles.formContainer}>
            {resetSuccess ? (
              <>
                <Text style={styles.title}>Hasło zostało zmienione</Text>
                <Text style={styles.text}>
                  Teraz możesz wrócić do aplikacji i się zalogować.
                </Text>
                <TouchableOpacity onPress={() => router.replace("/")}>
                  <Text style={styles.link}>Powrót do strony głównej</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.title}>Ustaw nowe hasło</Text>
                <TextInput
                  placeholder="Nowe hasło"
                  secureTextEntry
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#999"
                />
                <TextInput
                  placeholder="Powtórz hasło"
                  secureTextEntry
                  style={styles.input}
                  value={confirm}
                  onChangeText={setConfirm}
                  placeholderTextColor="#999"
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={handlePasswordReset}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.buttonText}>Zmień hasło</Text>
                  )}
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    contentContainer: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.background,
    },
    formContainer: {
      width: "100%",
      maxWidth: 600,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.primary,
      marginBottom: 32,
      textAlign: "center",
    },
    text: {
      fontSize: 16,
      color: "#444",
      textAlign: "center",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      backgroundColor: "#f1efed",
      padding: 14,
      borderRadius: 10,
      fontSize: 16,
      color: "#000",
      marginBottom: 16,
    },
    button: {
      width: "100%",
      backgroundColor: colors.secondary,
      padding: 14,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    link: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.secondary,
      textAlign: "center",
      marginTop: 20,
    },
  });
