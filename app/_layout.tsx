import '@/global.css';

import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { FontLoader } from '@/lib/font-loader';
import { ThemeProvider, useTheme } from '@/lib/theme-provider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

function ThemedStatusBar() {
  const { theme } = useTheme();
  return <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />;
}

export default function RootLayout() {
  return (
    <FontLoader>
      <ThemeProvider>
        <ThemedStatusBar />
        <Stack />
        <PortalHost />
      </ThemeProvider>
    </FontLoader>
  );
}
