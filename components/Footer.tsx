import { useTheme } from '@/theme/ThemeProvider';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Footer - linki do privacy policy, usuwania konta i kontaktu
 */
const Footer: React.FC = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    footer: {
      backgroundColor: colors.backgroundSecondary,
      paddingHorizontal: 24,
      paddingVertical: 28,
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    linksContainer: {
      flexDirection: 'row',
      gap: 24,
      marginBottom: 16,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    link: {
      color: colors.primary,
      fontSize: 14,
      fontWeight: '600',
    },
    separator: {
      color: colors.border,
      fontSize: 10,
    },
    copyright: {
      color: colors.textSecondary,
      fontSize: 12,
      letterSpacing: 0.3,
    },
  });

  return (
    <View style={styles.footer}>
      <View style={styles.linksContainer}>
        <Link href="/privacy-policy" style={styles.link}>
          Polityka Prywatności
        </Link>
        <Text style={styles.separator}>•</Text>
        <Link href="/terms" style={styles.link}>
          Regulamin
        </Link>
        <Text style={styles.separator}>•</Text>
        <Link href="/delete-account" style={styles.link}>
          Usuń konto
        </Link>
        <Text style={styles.separator}>•</Text>
        <Link href="/contact" style={styles.link}>
          Kontakt
        </Link>
      </View>
      <Text style={styles.copyright}>
        © 2026 Timelly. Wszystkie prawa zastrzeżone.
      </Text>
    </View>
  );
};

export default Footer;