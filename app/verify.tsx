import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTheme } from '@/theme/ThemeProvider';
import { ThemeColors } from '@/theme/colors';
import { supabase } from '@/utils/supabase';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EmailVerificationScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const { token, type } = useLocalSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const errorFromHash = hashParams.get('error');
    const errorDescription = hashParams.get('error_description');

    if (errorFromHash) {
      setErrorMessage(errorDescription || 'Wystąpił błąd podczas weryfikacji.');
      setStatus('error');
    } else if (typeof token === 'string' && type === 'signup') {
      const verify = async () => {
        const { error } = await supabase.auth.exchangeCodeForSession(token);
        if (error) {
          setErrorMessage(error.message);
          setStatus('error');
        } else {
          setStatus('success');
        }
      };
      verify();
    } else {
      setStatus('success');
    }
  }, [token, type]);

  return (
    <View style={styles.page}>
      <Header />

      <View style={styles.centerWrap}>
        <View style={styles.card}>
          {status === 'loading' && (
            <>
              <View style={styles.iconCircle}>
                <ActivityIndicator size="large" color={colors.primary} />
              </View>
              <Text style={styles.title}>Weryfikacja konta...</Text>
              <Text style={styles.subtitle}>
                Proszę czekać, trwa potwierdzanie adresu e-mail.
              </Text>
            </>
          )}

          {status === 'success' && (
            <>
              <View style={[styles.iconCircle, styles.iconCircleSuccess]}>
                <FontAwesome6
                  name="circle-check"
                  size={30}
                  color={colors.primary}
                  solid
                />
              </View>
              <Text style={styles.title}>Konto zostało aktywowane</Text>
              <Text style={styles.subtitle}>
                Możesz wrócić do aplikacji i się zalogować.
              </Text>
            </>
          )}

          {status === 'error' && (
            <>
              <View style={[styles.iconCircle, styles.iconCircleError]}>
                <FontAwesome6
                  name="circle-xmark"
                  size={30}
                  color={colors.secondary}
                  solid
                />
              </View>
              <Text style={styles.title}>Coś poszło nie tak</Text>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </>
          )}

          {status !== 'loading' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace('/')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Powrót do strony głównej</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

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
    centerWrap: {
      flex: 1,
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
      width: 72,
      height: 72,
      borderRadius: 36,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24,
    },
    iconCircleSuccess: {
      backgroundColor: colors.primary + '15',
    },
    iconCircleError: {
      backgroundColor: colors.secondary + '15',
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
    errorText: {
      fontSize: 15,
      color: colors.secondary,
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: 28,
      maxWidth: 340,
    },
    button: {
      width: '100%',
      backgroundColor: colors.secondary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
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