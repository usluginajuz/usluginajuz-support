import { router } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Logo Timelly - używane w headerze
 * Kliknięcie wraca na stronę główną
 */
const Logo: React.FC = () => (
  <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.7}>
    <Image
      source={{ uri: '/icon.png' }}
      style={styles.icon}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});

export default Logo;