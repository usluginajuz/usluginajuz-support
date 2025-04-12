/**
 * ThemeColors
 *
 * Struktura kolorów używana w całej aplikacji.
 * Można ją rozszerzyć o dodatkowe pola (np. `border`, `text`, `button`).
 */
export type ThemeColors = {
  background: string;
  primary: string;
  secondary: string;
  info: string;
};
  
/**
 * lightColors
 *
 * Domyślny zestaw kolorów aplikacji (jasny motyw).
 * - background: kolor tła
 * - primary: kolor akcentu (np. pomarańczowy)
 * - secondary: kolor kontrastowy (np. granatowy)
 */
const lightColors: ThemeColors = {
  background: '#e7e4e1',
  primary: '#26354b',
  secondary: '#e45e38',
  info: '#666',
};
  
/**
 * getColors
 *
 * Funkcja zwracająca aktualny zestaw kolorów.
 * Obecnie zwraca tylko jasny motyw, ale może być rozwinięta
 * o obsługę dark mode lub personalizacji.
 */
export const getColors = (): ThemeColors => lightColors;
  