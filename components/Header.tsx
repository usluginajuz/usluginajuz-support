import Logo from '@/components/Logo';
import { useTheme } from '@/theme/ThemeProvider';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Header – logo po lewej, wycentrowany napis Timelly
 */
const Header: React.FC = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 12,
      ...({
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
      } as any),
    },
    logoWrap: {
      zIndex: 1,
    },
    titleWrap: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '700',
      letterSpacing: 0.5,
    },
  });

  return (
    <View style={styles.header}>
      <View style={styles.logoWrap}>
        <Logo />
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Timelly</Text>
      </View>
    </View>
  );
};

export default Header;