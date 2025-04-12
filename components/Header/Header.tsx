import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Komponent Header (z SafeAreaInsets)
 *
 * Uniwersalny wrapper dla nagłówków używanych w głównej aplikacji (tabs/stack).
 * ▸ Dodaje górny margines oparty o `SafeAreaInsets` (dla notcha, status bara itd.)
 * ▸ Styluje layout: tło, padding, kierunek dzieci (flex row)
 * ▸ Działa w standardowych widokach aplikacji
 *
 * Użycie przykładowe:
 * <Header>
 *   <Back />
 *   <SearchBar />
 *   <Logo />
 * </Header>
 */
const Header: React.FC<{children: React.ReactNode}> = ({children}) => {
    const insets = useSafeAreaInsets();
    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#dcd8d4',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
            paddingTop: insets.top + 10
        },
    })
    return(
        <View style={styles.header}>{children}</View>
    )
}

export default Header;