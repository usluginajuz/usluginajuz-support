import { useTheme } from '@/theme/ThemeProvider';
import { StyleSheet, View } from 'react-native';

/**
 * Header - uproszczony dla webówki
 */
const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingVertical: 14,
      ...({
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
      } as any),
    },
  });

  return <View style={styles.header}>{children}</View>;
};

export default Header;