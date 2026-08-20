import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider as NavigationThemeProvider } from 'expo-router/react-navigation';
import { useColorScheme } from 'nativewind';
import * as React from 'react';

export type Theme = 'light' | 'dark';

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const { setColorScheme } = useColorScheme();
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);

  React.useLayoutEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    setColorScheme(next);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationThemeProvider value={NAV_THEME[theme]}>
        {children}
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
