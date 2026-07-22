import type { NextConfig } from "next";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const root = resolve(__dirname, "..");

const reactNativeWeb = dirname(require.resolve("react-native-web/package.json"));

const rnPrimitives = [
  "accordion",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "checkbox",
  "collapsible",
  "dialog",
  "dropdown-menu",
  "label",
  "popover",
  "portal",
  "progress",
  "radio-group",
  "select",
  "separator",
  "slot",
  "switch",
  "tabs",
  "toggle",
  "toggle-group",
  "tooltip",
] as const;

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  images: { unoptimized: true },
  trailingSlash: true,
  outputFileTracingRoot: root,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "nativewind",
    "react-native-css-interop",
    "react-native-reanimated",
    "react-native-worklets",
    "react-native-svg",
    "react-native-screens",
    "react-native-safe-area-context",
    "lucide-react-native",
    ...rnPrimitives.map((name) => `@rn-primitives/${name}`),
  ],
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      }),
    );
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "react-native$": reactNativeWeb,
      "@": root,
      "@site": __dirname,
    };
    config.resolve.modules = [
      resolve(__dirname, "node_modules"),
      ...(config.resolve.modules ?? ["node_modules"]),
    ];
    config.resolve.extensions = [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ...(config.resolve.extensions ?? []),
    ];
    return config;
  },
  turbopack: {
    resolveAlias: {
      "react-native": "react-native-web",
      "react-native$": "react-native-web",
      "@": root,
      "@site": __dirname,
    },
    resolveExtensions: [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".json",
    ],
  },
};

export default nextConfig;
