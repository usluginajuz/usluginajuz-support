import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTheme } from '@/theme/ThemeProvider';
import { ThemeColors } from '@/theme/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CONTACT_EMAIL } from '@/utils/supabase';

// ── Section data ──

const deletedData = [
  'Dane konta — adres e‑mail, imię/nazwa, numer telefonu, rola użytkownika',
  'Profil firmy (wraz z usługami, godzinami pracy i przerwami)',
  'Zlecenia dodane przez Ciebie oraz powiązane załączniki i zdjęcia',
  'Polubienia i lista ulubionych',
  'Aktywne i przyszłe rezerwacje — zostaną anulowane',
];

const retainedData = [
  'Techniczne logi systemowe i kopie zapasowe (przechowywane tymczasowo przez Supabase)',
  'Anonimowe rekordy statystyczne, których nie da się powiązać z danymi osobowymi',
  'Informacje wymagane prawem (np. dokumentacja księgowa, jeżeli dotyczy)',
];

const timelineSteps = [
  { label: 'Potwierdzenie przyjęcia wniosku', value: 'do 7 dni roboczych' },
  { label: 'Usunięcie danych operacyjnych', value: 'do 14 dni od potwierdzenia' },
  { label: 'Pełne usunięcie z kopii zapasowych', value: 'do 30 dni (cykl retencji)' },
];

export default function DeleteAccountScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const handleEmailPress = () => {
    Linking.openURL(
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Usunięcie konta — Timelly')}`
    );
  };

  return (
    <View style={styles.page}>
      <Header/>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ── Page header ── */}
        <View style={styles.pageHeader}>
          <View style={styles.iconCircle}>
            <FontAwesome6 name="user-xmark" size={24} color={colors.secondary} />
          </View>
          <Text style={styles.pageTitle}>Usuwanie konta</Text>
          <Text style={styles.pageSubtitle}>
            Dowiedz się jak usunąć konto i jakie dane zostaną usunięte.
          </Text>
        </View>

        {/* ── Jak usunąć ── */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
              <FontAwesome6 name="mobile-screen" size={18} color={colors.primary} />
            </View>
            <Text style={styles.cardTitle}>Sposób 1 — w aplikacji</Text>
          </View>
          <Text style={styles.cardText}>
            Otwórz aplikację Timelly, przejdź do zakładki{' '}
            <Text style={styles.bold}>Profil</Text>, następnie kliknij ikonę{' '}
            <Text style={styles.bold}>Ustawienia</Text> (⚙️) i na dole strony
            znajdziesz opcję{' '}
            <Text style={styles.bold}>Usuń konto</Text>.
          </Text>
          <Text style={[styles.cardText, styles.cardTextMuted]}>
            Zostaniesz poproszony o potwierdzenie — po zatwierdzeniu proces
            usunięcia rozpocznie się automatycznie.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
              <FontAwesome6 name="envelope" size={18} color={colors.primary} />
            </View>
            <Text style={styles.cardTitle}>Sposób 2 — przez e‑mail</Text>
          </View>
          <View style={styles.stepList}>
            <StepItem number="1" colors={colors} styles={styles}>
              Wyślij wiadomość z adresu powiązanego z Twoim kontem na:{' '}
              <Text style={styles.link} onPress={handleEmailPress}>
                {CONTACT_EMAIL}
              </Text>
            </StepItem>
            <StepItem number="2" colors={colors} styles={styles}>
              W temacie wpisz{' '}
              <Text style={styles.bold}>„Usunięcie konta — Timelly"</Text>, a w
              treści podaj imię/nazwę profilu oraz numer telefonu (jeśli był
              zapisany).
            </StepItem>
            <StepItem number="3" colors={colors} styles={styles}>
              Po potwierdzeniu tożsamości rozpoczniemy procedurę trwałego
              usunięcia konta i danych.
            </StepItem>
          </View>
        </View>

        {/* ── Zakres danych ── */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: colors.secondary + '15' }]}>
              <FontAwesome6 name="trash-can" size={18} color={colors.secondary} />
            </View>
            <Text style={styles.cardTitle}>Dane, które zostaną usunięte</Text>
          </View>
          {deletedData.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: colors.secondary }]} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
              <FontAwesome6 name="shield-halved" size={18} color={colors.primary} />
            </View>
            <Text style={styles.cardTitle}>Co może pozostać</Text>
          </View>
          <Text style={[styles.cardText, styles.cardTextMuted, { marginBottom: 16 }]}>
            Uzasadniony interes i rozliczalność:
          </Text>
          {retainedData.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <View style={[styles.bulletDot, { backgroundColor: colors.textSecondary }]} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
          <Text style={[styles.cardText, styles.cardTextMuted, { marginTop: 12 }]}>
            Kopie zapasowe są nadpisywane zgodnie z cyklem retencji dostawcy i
            nie są używane operacyjnie.
          </Text>
        </View>

        {/* ── Terminy ── */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
              <FontAwesome6 name="clock" size={18} color={colors.primary} />
            </View>
            <Text style={styles.cardTitle}>Terminy realizacji</Text>
          </View>
          {timelineSteps.map((step, i) => (
            <View key={i} style={styles.timelineRow}>
              <View style={styles.timelineNumberWrap}>
                <Text style={[styles.timelineNumber, { color: colors.primary }]}>
                  {i + 1}
                </Text>
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineLabel}>{step.label}</Text>
                <Text style={styles.timelineValue}>{step.value}</Text>
              </View>
            </View>
          ))}
          <View style={styles.noteBox}>
            <FontAwesome6
              name="circle-info"
              size={14}
              color={colors.primary}
              style={{ marginTop: 2 }}
            />
            <Text style={styles.noteText}>
              W okresie do 7 dni od potwierdzenia możesz poprosić o cofnięcie
              usuwania. Po tym czasie proces jest nieodwracalny.
            </Text>
          </View>
        </View>

        {/* ── Kontakt ── */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
              <FontAwesome6 name="headset" size={18} color={colors.primary} />
            </View>
            <Text style={styles.cardTitle}>Kontakt</Text>
          </View>
          <Text style={styles.cardText}>
            W razie pytań skontaktuj się z nami:
          </Text>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={handleEmailPress}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="envelope" size={16} color={colors.primary} />
            <Text style={styles.contactButtonText}>{CONTACT_EMAIL}</Text>
            <FontAwesome6
              name="arrow-up-right-from-square"
              size={12}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%' }}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

// ── Step item sub-component ──

function StepItem({
  number,
  children,
  colors,
  styles,
}: {
  number: string;
  children: React.ReactNode;
  colors: ThemeColors;
  styles: ReturnType<typeof createStyles>;
}) {
  return (
    <View style={styles.stepRow}>
      <View style={styles.stepNumberWrap}>
        <Text style={[styles.stepNumber, { color: colors.primary }]}>
          {number}
        </Text>
      </View>
      <Text style={[styles.cardText, { flex: 1, marginBottom: 0 }]}>
        {children}
      </Text>
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

    // ── Page header ──
    pageHeader: {
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 48,
      paddingBottom: 32,
      maxWidth: 600,
    },
    iconCircle: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: colors.secondary + '15',
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

    // ── Card ──
    card: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
      marginHorizontal: 24,
      borderWidth: 1,
      borderColor: colors.border,
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
    },
    cardIconWrap: {
      width: 40,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
      flex: 1,
    },
    cardText: {
      fontSize: 15,
      color: colors.text,
      lineHeight: 22,
      marginBottom: 8,
    },
    cardTextMuted: {
      color: colors.textSecondary,
    },
    bold: {
      fontWeight: '700',
    },
    link: {
      color: colors.primary,
      fontWeight: '600',
    },

    // ── Steps ──
    stepList: {
      gap: 16,
    },
    stepRow: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'flex-start',
    },
    stepNumberWrap: {
      width: 28,
      height: 28,
      borderRadius: 8,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
    },
    stepNumber: {
      fontSize: 14,
      fontWeight: '800',
    },

    // ── Bullets ──
    bulletRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      marginBottom: 10,
    },
    bulletDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      marginTop: 8,
    },
    bulletText: {
      fontSize: 14,
      color: colors.text,
      lineHeight: 22,
      flex: 1,
    },

    // ── Timeline ──
    timelineRow: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'flex-start',
      marginBottom: 16,
    },
    timelineNumberWrap: {
      width: 28,
      height: 28,
      borderRadius: 8,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
    },
    timelineNumber: {
      fontSize: 14,
      fontWeight: '800',
    },
    timelineContent: {
      flex: 1,
    },
    timelineLabel: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 2,
    },
    timelineValue: {
      fontSize: 14,
      color: colors.textSecondary,
    },

    // ── Note box ──
    noteBox: {
      flexDirection: 'row',
      gap: 10,
      backgroundColor: colors.primary + '08',
      borderRadius: 10,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.primary + '20',
      marginTop: 4,
    },
    noteText: {
      fontSize: 13,
      color: colors.textSecondary,
      lineHeight: 20,
      flex: 1,
    },

    // ── Contact button ──
    contactButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.background,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderWidth: 1,
      borderColor: colors.border,
      marginTop: 12,
    },
    contactButtonText: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.primary,
      flex: 1,
    },
  });