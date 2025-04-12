import Fontisto from "@expo/vector-icons/build/Fontisto";
import { router } from "expo-router";
import { TouchableOpacity, } from 'react-native';

/**
 * Komponent Back
 *
 * Przycisk cofania używany w nagłówku – działa jako `router.back()` w Expo Routerze.
 */
const Back: React.FC = () => (
    <TouchableOpacity onPress={() => router.back()} style={{ paddingVertical: 8 }}>
        <Fontisto name="angle-left" size={20} color="white" />
    </TouchableOpacity>
)

export default Back;