import { useTheme } from '@/theme/ThemeProvider';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * DownloadButtons – profesjonalne przyciski do pobrania aplikacji
 */
const DownloadButtons: React.FC = () => {
  const { colors } = useTheme();

  const handleAppStore = () => {
    // TODO: Podmień na prawdziwy link
    Linking.openURL('https://apps.apple.com/app/timelly');
  };

  const handleGooglePlay = () => {
    // TODO: Podmień na prawdziwy link
    Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.timelly'
    );
  };

  const handleWebApp = () => {
    Linking.openURL('https://app.timelly.pl');
  };

  const styles = StyleSheet.create({
    container: {
      gap: 20,
      alignItems: 'center',
      marginTop: 32,
    },

    // ── Web App CTA ──
    ctaButton: {
      backgroundColor: colors.secondary,
      paddingHorizontal: 36,
      paddingVertical: 16,
      borderRadius: 14,
      minWidth: 240,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
      ...({
        shadowColor: colors.secondary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
      } as any),
    },
    ctaText: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '700',
      letterSpacing: 0.3,
    },

    // ── Separator ──
    separatorRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      width: '80%',
      maxWidth: 300,
    },
    separatorLine: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: colors.border,
    },
    separatorText: {
      color: colors.textSecondary,
      fontSize: 12,
      fontWeight: '500',
      letterSpacing: 0.8,
      textTransform: 'uppercase',
    },

    // ── Store buttons row ──
    storeRow: {
      flexDirection: 'row',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    // ── Store button ──
    storeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      backgroundColor: colors.backgroundSecondary,
      borderWidth: 1.5,
      borderColor: colors.border,
      borderRadius: 14,
      paddingHorizontal: 20,
      paddingVertical: 12,
      minWidth: 170,
      ...({
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      } as any),
    },
    storeIconWrap: {
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
    },
    storeTextWrap: {
      flexDirection: 'column',
    },
    storeLabel: {
      color: colors.textSecondary,
      fontSize: 11,
      fontWeight: '500',
      lineHeight: 14,
    },
    storeName: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      {/* Główny CTA – Web App */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={handleWebApp}
        activeOpacity={0.8}
      >
        <Text style={styles.ctaText}>Przejdź do aplikacji</Text>
        <FontAwesome6 name="arrow-right-long" size={18} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separatorRow}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>lub pobierz</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* Store buttons */}
      <View style={styles.storeRow}>
        <TouchableOpacity
          style={styles.storeButton}
          onPress={handleAppStore}
          activeOpacity={0.7}
        >
          <View style={styles.storeIconWrap}>
            <FontAwesome6 name="apple" size={28} color={colors.text} />
          </View>
          <View style={styles.storeTextWrap}>
            <Text style={styles.storeLabel}>Pobierz z</Text>
            <Text style={styles.storeName}>App Store</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.storeButton}
          onPress={handleGooglePlay}
          activeOpacity={0.7}
        >
          <View style={styles.storeIconWrap}>
            <FontAwesome6 name="google-play" size={24} color={colors.text} />
          </View>
          <View style={styles.storeTextWrap}>
            <Text style={styles.storeLabel}>Pobierz z</Text>
            <Text style={styles.storeName}>Google Play</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DownloadButtons;