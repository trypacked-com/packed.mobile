"use client";

import "@site/lib/rnw-globals";

/**
 * NativeWind's jsxImportSource wraps JSX and auto-cssInterops RN primitives
 * (see react-native-css-interop/runtime/components). Import this module from
 * the preview client entry so globals + the interop path load before demos.
 */
import "react-native-css-interop/dist/runtime/components.js";
