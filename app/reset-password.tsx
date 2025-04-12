import Header from "@/components/Header/Header";
import Logo from "@/components/Header/Logo";
import { useTheme } from "@/context/ThemeProvider";
import { ThemeColors } from "@/theme/colors";
import { supabase } from "@/utils/supabase";
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

  const handlePasswordReset = async () => {
    if (password !== confirm) {
      Alert.alert("Hasła się nie zgadzają");
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      Alert.alert("Błąd", error.message);
    } else {
      Alert.alert("Sukces", "Hasło zostało zmienione.");
    }
    setLoading(false);
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

        {/* ScrollView – w stylu (zwykłym) ograniczamy TYLKO tło, ewentualne marginesy itp. */}
        <ScrollView
          style={{ backgroundColor: colors.background }}
          // Tutaj układ dzieci (czyli formularza) – w contentContainerStyle
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          bounces={false}
        >
          {/* Ten główny kontener "card"  */}
          <View style={styles.formContainer}>
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    // Tu ustawiamy układ dzieci w ScrollView: center w pionie, center w poziomie
    contentContainer: {
      flexGrow: 1,
      justifyContent: "center", // wyśrodkowanie pionowe
      alignItems: "center",      // wyśrodkowanie poziome
      paddingHorizontal: 24,
      paddingVertical: 16,
    },

    // Ten kontener to "karta" / formularz – ma stałą maksymalną szerokość
    // i jest środkiem, w którym wyświetlamy Inputy + przycisk
    formContainer: {
      width: "100%",        // zajmuje 100% z contentContainer
      maxWidth: 600,        // ale nie więcej niż 600px na szerokich ekranach
      backgroundColor: colors.background,
    },

    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.primary,
      marginBottom: 32,
      textAlign: "center",
    },
    input: {
      width: "100%",        // wypełnia szerokość formContainer
      backgroundColor: "#f1efed",
      padding: 14,
      borderRadius: 10,
      fontSize: 16,
      color: "#000",
      marginBottom: 16,
    },
    button: {
      width: "100%",        // wypełnia szerokość formContainer
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
  });
