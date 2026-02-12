import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';

interface SplashIconProps {
  width?: number;
  height?: number;
}

/**
 * SplashIcon – wyświetla splash image, skalowany responsywnie
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

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: '/splash-light.png' }}
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