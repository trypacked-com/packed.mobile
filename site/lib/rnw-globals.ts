"use client";

/**
 * Must load before any react-native / reanimated imports.
 * Keep free of those imports so the side effect runs first under ESM hoisting
 * when this module is imported ahead of preview code.
 */

if (typeof (globalThis as { __DEV__?: boolean }).__DEV__ === "undefined") {
  (globalThis as { __DEV__?: boolean }).__DEV__ =
    process.env.NODE_ENV !== "production";
}

export {};
