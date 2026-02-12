/**
 * 🎨 THEME COLORS - Auto mode only
 * System wykrywa light/dark mode z przeglądarki
 */

export type ThemeColors = {
  background: string;
  backgroundSecondary: string;
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
};

const lightColors: ThemeColors = {
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  primary: '#1b1b38',
  secondary: '#6FA8D0',
  text: '#111827',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
};

const darkColors: ThemeColors = {
  background: '#111827',
  backgroundSecondary: '#1F2937',
  primary: '#6FA8D0',
  secondary: '#1b1b38',
  text: '#F9FAFB',
  textSecondary: '#9CA3AF',
  border: '#374151',
};

export const getColors = (isDark: boolean): ThemeColors => {
  return isDark ? darkColors : lightColors;
};