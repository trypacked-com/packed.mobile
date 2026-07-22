"use client";

import { createContext, useContext, useLayoutEffect, useState } from "react";

import { cn } from "@site/lib/utils";

export const THEME_STORAGE_KEY = "packed-theme";

export type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

function getThemeCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${THEME_STORAGE_KEY}=([^;]*)`),
  );

  return match?.[1];
}

function setThemeCookie(theme: Theme) {
  document.cookie = `${THEME_STORAGE_KEY}=${theme};path=/;max-age=31536000;SameSite=Lax`;
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(
  cookieValue: string | undefined,
  defaultTheme: Theme | undefined,
): Theme {
  if (cookieValue === "dark" || cookieValue === "light") return cookieValue;
  if (defaultTheme === "dark" || defaultTheme === "light") return defaultTheme;
  if (typeof window !== "undefined") return getSystemTheme();
  return defaultTheme ?? "light";
}

export function ThemeProvider({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(() =>
    resolveTheme(getThemeCookie(), defaultTheme),
  );

  useLayoutEffect(() => {
    const resolved = resolveTheme(getThemeCookie(), defaultTheme);
    setThemeState(resolved);
    setThemeCookie(resolved);
  }, [defaultTheme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    setThemeCookie(next);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={cn("min-h-full", theme === "dark" && "dark")}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
