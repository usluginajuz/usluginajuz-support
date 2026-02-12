import DownloadButtons from '@/components/DownloadButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import SplashIcon from '@/components/SplashIcon';
import { useTheme } from '@/theme/ThemeProvider';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


// ── Feature card data ──
const features = [
  {
    icon: 'calendar-check' as const,
    title: 'Rezerwacja online',
    description: 'Umów wizytę w kilka kliknięć, 24/7 — bez dzwonienia.',
  },
  {
    icon: 'bell' as const,
    title: 'Powiadomienia',
    description: 'Przypomnienia o wizytach, żebyś nigdy nie zapomniał.',
  },
  {
    icon: 'shop' as const,
    title: 'Zarządzanie firmą',
    description: 'Pełny panel do zarządzania usługami, grafikiem i klientami.',
  },
  {
    icon: 'clock-rotate-left' as const,
    title: 'Historia wizyt',
    description: 'Wszystkie Twoje rezerwacje w jednym miejscu.',
  },
];

// ── "For who" card data ──
const audiences = [
  {
    icon: 'user' as const,
    title: 'Dla klientów',
    points: [
      'Przeglądaj dostępne usługi w okolicy',
      'Rezerwuj wizyty w kilka sekund',
      'Zarządzaj swoimi rezerwacjami',
      'Otrzymuj przypomnienia o wizytach',
    ],
  },
  {
    icon: 'briefcase' as const,
    title: 'Dla firm',
    points: [
      'Dodaj swoją firmę i usługi',
      'Zarządzaj grafikiem i pracownikami',
      'Przyjmuj rezerwacje automatycznie',
      'Buduj bazę stałych klientów',
    ],
  },
];

export default function Index() {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
    },

    // ── Hero ──
    hero: {
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 56,
      paddingBottom: 48,
    },
    heroSubtitle: {
      fontSize: 18,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 28,
      maxWidth: 480,
      marginTop: 12,
    },

    // ── Section shared ──
    section: {
      paddingHorizontal: 24,
      paddingVertical: 48,
      alignItems: 'center',
    },
    sectionAlt: {
      backgroundColor: colors.backgroundSecondary,
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: '800',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 8,
    },
    sectionSubtitle: {
      fontSize: 15,
      color: colors.textSecondary,
      textAlign: 'center',
      marginBottom: 32,
      maxWidth: 420,
      lineHeight: 22,
    },

    // ── Feature cards ──
    featuresGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 16,
      maxWidth: 700,
    },
    featureCard: {
      backgroundColor: colors.background,
      borderRadius: 16,
      padding: 24,
      width: 300,
      borderWidth: 1,
      borderColor: colors.border,
      ...({
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      } as any),
    },
    featureIconWrap: {
      width: 48,
      height: 48,
      borderRadius: 12,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    featureTitle: {
      fontSize: 17,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 6,
    },
    featureDesc: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 20,
    },

    // ── Audience cards ──
    audienceRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 20,
      maxWidth: 700,
    },
    audienceCard: {
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 28,
      width: 320,
      borderWidth: 1.5,
      borderColor: colors.border,
      ...({
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      } as any),
    },
    audienceHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20,
    },
    audienceIconWrap: {
      width: 52,
      height: 52,
      borderRadius: 14,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
    },
    audienceTitle: {
      fontSize: 20,
      fontWeight: '800',
      color: colors.text,
    },
    audiencePointRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      marginBottom: 12,
    },
    audienceCheckWrap: {
      width: 22,
      height: 22,
      borderRadius: 6,
      backgroundColor: colors.primary + '20',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1,
    },
    audiencePointText: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 20,
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Header>
        <Logo />
      </Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ── Hero ── */}
        <View style={styles.hero}>
          <SplashIcon/>
          <Text style={styles.heroSubtitle}>
            Rezerwuj usługi w sekundę — wszystko w jednym miejscu.
          </Text>
          <DownloadButtons />
        </View>

        {/* ── Funkcjonalności ── */}
        <View style={[styles.section, styles.sectionAlt]}>
          <Text style={styles.sectionTitle}>Co oferuje Timelly?</Text>
          <Text style={styles.sectionSubtitle}>
            Wszystko, czego potrzebujesz do rezerwacji i zarządzania usługami.
          </Text>
          <View style={styles.featuresGrid}>
            {features.map((f) => (
              <View key={f.icon} style={styles.featureCard}>
                <View style={styles.featureIconWrap}>
                  <FontAwesome6
                    name={f.icon}
                    size={22}
                    color={colors.primary}
                  />
                </View>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Dla kogo? ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dla kogo?</Text>
          <Text style={styles.sectionSubtitle}>
            Timelly łączy klientów szukających usług z firmami, które je
            oferują.
          </Text>
          <View style={styles.audienceRow}>
            {audiences.map((a) => (
              <View key={a.title} style={styles.audienceCard}>
                <View style={styles.audienceHeader}>
                  <View style={styles.audienceIconWrap}>
                    <FontAwesome6
                      name={a.icon}
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                  <Text style={styles.audienceTitle}>{a.title}</Text>
                </View>
                {a.points.map((point, i) => (
                  <View key={i} style={styles.audiencePointRow}>
                    <View style={styles.audienceCheckWrap}>
                      <FontAwesome6
                        name="check"
                        size={11}
                        color={colors.primary}
                      />
                    </View>
                    <Text style={styles.audiencePointText}>{point}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
        <View style={{ width: '100%' }}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}