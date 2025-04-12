import { getColors, ThemeColors } from '@/theme/colors';
import React, { createContext, useContext } from 'react';

/**
 * Typ kontekstu ThemeContext
 *
 * Zawiera zestaw kolorów aktualnego motywu.
 * Typ bazuje na strukturze ThemeColors zdefiniowanej w `theme/colors.ts`.
 */
type ThemeContextType = {
  colors: ThemeColors;
};

/**
 * ThemeContext
 *
 * Kontekst przechowujący aktualne kolory aplikacji.
 * Dostarcza komponentom dostęp do `colors`, bez konieczności przekazywania propsów.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider
 *
 * Provider dla kontekstu ThemeContext. 
 * Generuje kolory z `getColors()` i udostępnia je w całej aplikacji.
 *
 * Komponenty muszą znajdować się wewnątrz ThemeProvider, aby używać `useTheme()`.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colors = getColors();

  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook: useTheme
 *
 * Zwraca aktualne kolory motywu z kontekstu ThemeContext.
 * Rzuca błąd, jeśli zostanie użyty poza ThemeProviderem.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
