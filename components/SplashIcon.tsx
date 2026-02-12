import { Image, StyleSheet, useColorScheme, useWindowDimensions, View } from 'react-native';

const splashLight = require('@/assets/images/splash-light.png');
const splashDark = require('@/assets/images/splash-dark.png');

interface SplashIconProps {
  width?: number;
  height?: number;
}

/**
 * SplashIcon – wyświetla splash image dopasowany do motywu i rozmiaru ekranu
 */
const SplashIcon: React.FC<SplashIconProps> = ({
  width = 800,
  height = 450,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { width: screenWidth } = useWindowDimensions();

  // Na małych ekranach skaluj do 90% szerokości, zachowując proporcje
  const maxWidth = Math.min(width, screenWidth * 0.9);
  const scale = maxWidth / width;
  const finalWidth = maxWidth;
  const finalHeight = height * scale;

  return (
    <View style={styles.container}>
      <Image
        source={isDark ? splashDark : splashLight}
        style={{ width: finalWidth, height: finalHeight }}
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