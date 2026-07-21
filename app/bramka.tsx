import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTheme } from '@/theme/ThemeProvider';
import { ThemeColors } from '@/theme/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const APK_URL = '/downloads/timelly-bramka.apk';

// ── Kroki instalacji ──
const steps = [
  {
    icon: 'download' as const,
    title: 'Pobierz aplikację',
    description:
      'Kliknij przycisk pobierania na tej stronie (na telefonie firmowym z Androidem 10 lub nowszym). Przeglądarka może ostrzec, że plik pochodzi spoza Sklepu Play. To normalne: aplikacja wymaga uprawnień, których Sklep Play nie udostępnia zwykłym aplikacjom.',
  },
  {
    icon: 'shield-halved' as const,
    title: 'Zezwól na instalację',
    description:
      'Otwórz pobrany plik. Jeśli pojawi się komunikat Play Protect, wybierz „Zainstaluj mimo to". Na Androidzie 15 i 16 po instalacji wejdź w Ustawienia → Aplikacje → Timelly Bramka → menu ⋮ → „Zezwól na ustawienia z ograniczeniami".',
  },
  {
    icon: 'qrcode' as const,
    title: 'Sparuj z firmą',
    description:
      'W aplikacji Timelly (na swoim koncie firmowym) wejdź w Ustawienia → SMS → „Sparuj telefon" i przepisz 6-cyfrowy kod do aplikacji Timelly Bramka.',
  },
  {
    icon: 'toggle-on' as const,
    title: 'Włącz role telefonu',
    description:
      'W Timelly Bramka wybierz, do czego służy ten telefon: wysyłanie SMS-ów do klientów (z Twojej karty SIM) i wykrywanie połączeń przychodzących. Wykrywanie podpowiada numer dzwoniącego przy umawianiu wizyty, a jeśli włączysz to w Timelly, wysyła też SMS do klienta, gdy nikt nie odbierze telefonu.',
  },
  {
    icon: 'battery-full' as const,
    title: 'Wyłącz optymalizację baterii',
    description:
      'Aplikacja poprosi o wyłączenie optymalizacji baterii. Bez tego system może usypiać bramkę i opóźniać wysyłkę. Na telefonach Xiaomi, Huawei i Oppo włącz dodatkowo Autostart i przypnij aplikację na liście ostatnich aplikacji. W Ustawienia → Aplikacje → Timelly Bramka wyłącz też „Wstrzymuj aktywność w aplikacji, jeśli jest nieużywana" — inaczej Android po kilku miesiącach sam zabierze uprawnienia aplikacji, której nikt nie otwiera.',
  },
];

export default function BramkaScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.page}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ── Page header ── */}
        <View style={styles.pageHeader}>
          <View style={styles.iconCircle}>
            <FontAwesome6 name="tower-cell" size={24} color={colors.primary} />
          </View>
          <Text style={styles.pageTitle}>Timelly Bramka</Text>
          <Text style={styles.pageSubtitle}>
            Aplikacja na firmowy telefon z Androidem. SMS-y do Twoich klientów wychodzą z Twojego
            numeru, więc mogą po prostu oddzwonić albo odpisać. Gdy klient dzwoni, jego numer od
            razu podpowiada się przy umawianiu wizyty.
          </Text>
        </View>

        {/* ── Download ── */}
        <TouchableOpacity
          style={styles.downloadButton}
          activeOpacity={0.8}
          onPress={() => Linking.openURL(APK_URL)}
        >
          <FontAwesome6 name="android" size={20} color="#fff" />
          <Text style={styles.downloadText}>Pobierz aplikację (APK)</Text>
        </TouchableOpacity>
        <Text style={styles.downloadHint}>
          Android 10 lub nowszy · instalacja poza Sklepem Play · aplikacja działa wyłącznie po
          sparowaniu z kontem firmowym Timelly
        </Text>

        {/* ── Steps ── */}
        <View style={styles.stepsCard}>
          <Text style={styles.stepsTitle}>Instalacja krok po kroku</Text>
          {steps.map((step, i) => (
            <View key={step.title} style={styles.stepRow}>
              <View style={[styles.stepIconWrap, { backgroundColor: colors.primary + '15' }]}>
                <FontAwesome6 name={step.icon} size={18} color={colors.primary} />
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  {i + 1}. {step.title}
                </Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ── FAQ / uwagi ── */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Warto wiedzieć</Text>
          <Text style={styles.infoText}>
            • Jeśli telefon będzie niedostępny (offline albo rozładowany), SMS-y automatycznie
            wyślą się przez bramkę Timelly, więc klient zawsze dostanie wiadomość.{'\n'}
            • Wysyłka z własnej karty SIM podlega regulaminowi Twojego operatora. Przy typowych
            ilościach powiadomień (przypomnienia o wizytach) nie stanowi to problemu, ale za
            zgodność z umową z operatorem odpowiada firma.{'\n'}
            • Numery dzwoniących klientów przechowujemy maksymalnie 7 dni i służą wyłącznie
            podpowiedzi przy umawianiu wizyty.{'\n'}
            • Android nie przekazuje aplikacjom połączeń od numerów zapisanych w kontaktach
            telefonu. Wykrywanie działa więc dla numerów spoza kontaktów, czyli głównie dla
            nowych klientów. To ograniczenie systemu, nie aplikacji.{'\n'}
            • Telefon możesz odłączyć w każdej chwili: w aplikacji Timelly Bramka albo
            w Ustawieniach SMS w Timelly.
          </Text>
        </View>

        <View style={{ width: '100%' }}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

// ── Styles ──

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: 0,
    },
    pageHeader: {
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 48,
      paddingBottom: 24,
      maxWidth: 560,
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
    pageTitle: {
      fontSize: 28,
      fontWeight: '800',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 8,
    },
    pageSubtitle: {
      fontSize: 15,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
    },
    downloadButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      backgroundColor: colors.primary,
      paddingHorizontal: 32,
      paddingVertical: 16,
      borderRadius: 16,
    },
    downloadText: {
      fontSize: 17,
      fontWeight: '700',
      color: '#fff',
    },
    downloadHint: {
      fontSize: 12,
      color: colors.textSecondary,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 24,
      paddingHorizontal: 24,
      maxWidth: 480,
    },
    stepsCard: {
      width: '100%',
      maxWidth: 560,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
      marginHorizontal: 24,
      borderWidth: 1,
      borderColor: colors.border,
    },
    stepsTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 16,
    },
    stepRow: {
      flexDirection: 'row',
      gap: 14,
      marginBottom: 18,
    },
    stepIconWrap: {
      width: 44,
      height: 44,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontSize: 15,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 4,
    },
    stepDescription: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 20,
    },
    infoCard: {
      width: '100%',
      maxWidth: 560,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 24,
      marginBottom: 40,
      marginHorizontal: 24,
      borderWidth: 1,
      borderColor: colors.border,
    },
    infoTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 12,
    },
    infoText: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 22,
    },
  });
