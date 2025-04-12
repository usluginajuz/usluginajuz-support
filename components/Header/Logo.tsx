import { Image, StyleSheet } from 'react-native';

/**
 * Komponent Logo
 *
 * Wyświetla małe logo aplikacji – używany zwykle w nagłówku.
 */
const Logo: React.FC = () => (
    <Image
        source={require('@/assets/images/icon.png')}
        style={styles.icon}
        resizeMode="cover"
    />
)

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    },
});

export default Logo;