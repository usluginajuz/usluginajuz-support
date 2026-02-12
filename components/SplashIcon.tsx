import { Image, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

interface SplashIconProps {
  width?: number;
  height?: number;
}

/**
 * SplashIcon – wyświetla splash image, skalowany responsywnie
 * Na web używa natywnego <img> dla niezawodności
 * Obraz musi być w folderze public/splash-light.png
 * TODO: dodać obsługę dark mode gdy będzie potrzebna
 */
const SplashIcon: React.FC<SplashIconProps> = ({
  width = 800,
  height = 450,
}) => {
  const { width: screenWidth } = useWindowDimensions();

  const maxWidth = Math.min(width, screenWidth * 0.9);
  const scale = maxWidth / width;
  const finalWidth = maxWidth;
  const finalHeight = height * scale;

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <img
          src="/splash-light.png"
          alt="Timelly"
          style={{
            width: finalWidth,
            height: finalHeight,
            objectFit: 'contain',
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/splash-light.png')}
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