const path = require("node:path");

const rootConfig = require("../tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...rootConfig,
  content: [
    path.join(__dirname, "../components/ui/**/*.{ts,tsx}"),
    path.join(__dirname, "../components/docs/previews/**/*.{ts,tsx}"),
  ],
  important: ".rn-preview",
  corePlugins: {
    ...rootConfig.corePlugins,
    preflight: false,
  },
  theme: {
    ...rootConfig.theme,
    extend: {
      ...rootConfig.theme.extend,
      fontFamily: {
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        "sans-medium": ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        "sans-semibold": ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        "sans-bold": ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "ui-serif", "Georgia", "serif"],
        "serif-bold": ["Lora", "ui-serif", "Georgia", "serif"],
        mono: ["DM Mono", "ui-monospace", "monospace"],
        "mono-medium": ["DM Mono", "ui-monospace", "monospace"],
      },
    },
  },
};
