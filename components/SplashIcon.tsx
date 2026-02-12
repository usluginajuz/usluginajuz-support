import { Image, StyleSheet, useColorScheme, View } from 'react-native';

const splashLight = require('@/assets/images/splash-light.png');
const splashDark = require('@/assets/images/splash-dark.png');

interface SplashIconProps {
  width?: number;
  height?: number;
}

/**
 * SplashIcon – wyświetla splash image dopasowany do aktualnego motywu
 */
const SplashIcon: React.FC<SplashIconProps> = ({
  width = 220,
  height = 220,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <Image
        source={isDark ? splashDark : splashLight}
        style={{ width, height }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashIcon;