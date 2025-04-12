import { StyleSheet, View } from "react-native";
/**
 * Komponent HeaderModal (bez SafeAreaInsets)
 *
 * Nagłówek przeznaczony do widoków typu modal (np. logowanie/rejestracja).
 * ▸ Brak SafeAreaInsets – modale mają własny margines od góry
 * ▸ Lżejszy i prostszy layout – sam padding 16
 * 
 * Przykład użycia:
 *  <HeaderModal>
 *   <Back />
 *   <Logo />
 *  </HeaderModal>
 */
const HeaderModal: React.FC<{children: React.ReactNode}> = ({children}) => {
    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#dcd8d4',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
        },
    })
    return(
        <View style={styles.header}>{children}</View>
    )
}

export default HeaderModal;