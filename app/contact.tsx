import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTheme } from '@/theme/ThemeProvider';
import { ThemeColors } from '@/theme/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CONTACT_EMAIL } from '@/utils/supabase';

const CONTACT_PHONE = '+48577544977'; 

export default function ContactScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.page}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ── Page header ── */}
        <View style={styles.pageHeader}>
          <View style={styles.iconCircle}>
            <FontAwesome6 name="envelope" size={24} color={colors.primary} />
          </View>
          <Text style={styles.pageTitle}>Kontakt</Text>
          <Text style={styles.pageSubtitle}>
            Masz pytanie, sugestię lub potrzebujesz pomocy? Chętnie pomożemy.
          </Text>
        </View>

        {/* ── Contact cards ── */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => Linking.openURL(`mailto:${CONTACT_EMAIL}`)}
        >
          <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
            <FontAwesome6 name="envelope" size={20} color={colors.primary} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>E‑mail</Text>
            <Text style={styles.cardValue}>{CONTACT_EMAIL}</Text>
          </View>
          <FontAwesome6 name="arrow-up-right-from-square" size={14} color={colors.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => Linking.openURL(`tel:${CONTACT_PHONE.replace(/\s/g, '')}`)}
        >
          <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
            <FontAwesome6 name="phone" size={20} color={colors.primary} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>Telefon</Text>
            <Text style={styles.cardValue}>{CONTACT_PHONE}</Text>
          </View>
          <FontAwesome6 name="arrow-up-right-from-square" size={14} color={colors.textSecondary} />
        </TouchableOpacity>

        {/* ── Info box ── */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: colors.primary + '15' }]}>
              <FontAwesome6 name="circle-info" size={20} color={colors.primary} />
            </View>
            <Text style={styles.infoTitle}>Przydatne linki</Text>
          </View>

          <View style={styles.infoLinks}>
            <InfoLink
              icon="shield-halved"
              label="Polityka Prywatności"
              href="/privacy-policy"
              colors={colors}
              styles={styles}
            />
            <View style={styles.infoDivider} />
            <InfoLink
              icon="file-contract"
              label="Regulamin"
              href="/terms"
              colors={colors}
              styles={styles}
            />
            <View style={styles.infoDivider} />
            <InfoLink
              icon="user-xmark"
              label="Usuwanie konta"
              href="/delete-account"
              colors={colors}
              styles={styles}
            />
          </View>
        </View>

        <View style={{ width: '100%' }}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

// ── Sub-component ──

function InfoLink({
  icon,
  label,
  href,
  colors,
  styles,
}: {
  icon: string;
  label: string;
  href: string;
  colors: ThemeColors;
  styles: ReturnType<typeof createStyles>;
}) {
  return (
    <TouchableOpacity
      style={styles.infoLinkRow}
      activeOpacity={0.7}
      onPress={() => Linking.openURL(href)}
    >
      <View style={styles.infoLinkIconWrap}>
        <FontAwesome6 name={icon} size={15} color={colors.primary} />
      </View>
      <Text style={styles.infoLinkText}>{label}</Text>
      <FontAwesome6 name="chevron-right" size={12} color={colors.textSecondary} />
    </TouchableOpacity>
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
      maxWidth: 500,
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

    // ── Contact cards ──
    card: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 20,
      marginBottom: 12,
      marginHorizontal: 24,
      borderWidth: 1,
      borderColor: colors.border,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    cardIconWrap: {
      width: 48,
      height: 48,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContent: {
      flex: 1,
    },
    cardLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.textSecondary,
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      marginBottom: 2,
    },
    cardValue: {
      fontSize: 17,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 2,
    },
    cardHint: {
      fontSize: 13,
      color: colors.textSecondary,
      marginTop: 2,
    },

    // ── Info card ──
    infoCard: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 24,
      marginTop: 8,
      marginBottom: 40,
      marginHorizontal: 24,
      borderWidth: 1,
      borderColor: colors.border,
    },
    infoHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 20,
    },
    infoTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
    },
    infoLinks: {
      gap: 0,
    },
    infoLinkIconWrap: {
      width: 22,
      alignItems: 'center',
    },
    infoLinkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 14,
      paddingHorizontal: 4,
    },
    infoLinkText: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.primary,
      flex: 1,
    },
    infoDivider: {
      height: 1,
      backgroundColor: colors.border,
    },
  });