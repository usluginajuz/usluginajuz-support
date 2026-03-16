import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTheme } from '@/theme/ThemeProvider';
import { ThemeColors } from '@/theme/colors';
import { supabase } from '@/utils/supabase';
import { EmailOtpType } from '@supabase/supabase-js';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ResetPasswordScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { token_hash, type } = useLocalSearchParams();

  const [sessionReady, setSessionReady] = useState(false);
  const [sessionError, setSessionError] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const didRun = useRef(false);

  // First: verify the token from the email to establish a session
  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    if (typeof token_hash === 'string' && typeof type === 'string') {
      supabase.auth.verifyOtp({
        token_hash,
        type: type as EmailOtpType,
      }).then(({ error }) => {
        if (error) {
          setSessionError(error.message);
        } else {
          setSessionReady(true);
        }
      });
    } else {
      // Fallback: check if session exists from hash fragment (implicit flow)
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) {
          setSessionReady(true);
        } else {
          setSessionError('Nieprawidłowy lub wygasły link do resetowania hasła.');
        }
      });
    }
  }, [token_hash, type]);

  const handlePasswordReset = async () => {
    if (password.length < 6) {
      Alert.alert('Za krótkie hasło', 'Hasło musi mieć co najmniej 6 znaków.');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Hasła się nie zgadzają');
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);
    if (error) {
      Alert.alert('Coś poszło nie tak', error.message);
    } else {
      setResetSuccess(true);
      setPassword('');
      setConfirm('');
    }
  };

  return (
    <View style={styles.page}>
      <Header />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          {sessionError ? (
            <>
              <View style={[styles.iconCircle, { backgroundColor: colors.secondary + '15' }]}>
                <FontAwesome6 name="circle-xmark" size={28} color={colors.secondary} solid />
              </View>
              <Text style={styles.title}>Link wygasł</Text>
              <Text style={[styles.subtitle, { color: colors.secondary }]}>{sessionError}</Text>
              <Text style={styles.subtitle}>
                Poproś o nowy link do resetowania hasła w aplikacji.
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace('/')}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Powrót do strony głównej</Text>
              </TouchableOpacity>
            </>
          ) : !sessionReady ? (
            <>
              <View style={styles.iconCircle}>
                <ActivityIndicator size="large" color={colors.primary} />
              </View>
              <Text style={styles.title}>Przygotowywanie...</Text>
              <Text style={styles.subtitle}>Trwa weryfikacja linku.</Text>
            </>
          ) : resetSuccess ? (
            <>
              <View style={[styles.iconCircle, styles.iconCircleSuccess]}>
                <FontAwesome6 name="check" size={28} color={colors.primary} />
              </View>
              <Text style={styles.title}>Hasło zostało zmienione</Text>
              <Text style={styles.subtitle}>
                Teraz możesz wrócić do aplikacji i się zalogować.
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace('/')}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Powrót do strony głównej</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.iconCircle}>
                <FontAwesome6
                  name="lock"
                  size={24}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.title}>Ustaw nowe hasło</Text>
              <Text style={styles.subtitle}>
                Wpisz nowe hasło, które chcesz ustawić dla swojego konta.
              </Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nowe hasło</Text>
                <TextInput
                  placeholder="Wprowadź nowe hasło"
                  secureTextEntry
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor={colors.textSecondary}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Powtórz hasło</Text>
                <TextInput
                  placeholder="Powtórz nowe hasło"
                  secureTextEntry
                  style={styles.input}
                  value={confirm}
                  onChangeText={setConfirm}
                  placeholderTextColor={colors.textSecondary}
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePasswordReset}
                disabled={loading}
                activeOpacity={0.8}
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

      <Footer />
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 48,
    },
    card: {
      width: '100%',
      maxWidth: 440,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 20,
      padding: 36,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      ...({
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
      } as any),
    },
    iconCircle: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    iconCircleSuccess: {
      backgroundColor: colors.primary + '20',
    },
    title: {
      fontSize: 24,
      fontWeight: '800',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 15,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: 28,
      maxWidth: 340,
    },
    inputGroup: {
      width: '100%',
      marginBottom: 16,
    },
    label: {
      fontSize: 13,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 6,
      marginLeft: 4,
    },
    input: {
      width: '100%',
      backgroundColor: colors.background,
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderRadius: 12,
      fontSize: 16,
      color: colors.text,
      borderWidth: 1,
      borderColor: colors.border,
    },
    button: {
      width: '100%',
      backgroundColor: colors.secondary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 8,
      ...({
        shadowColor: colors.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      } as any),
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
    },
  });