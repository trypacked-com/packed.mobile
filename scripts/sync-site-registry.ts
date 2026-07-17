#!/usr/bin/env bun
import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dir, "..");
const sitePublic = resolve(root, "site/public");

await mkdir(resolve(sitePublic, "r"), { recursive: true });
await cp(resolve(root, "public/r"), resolve(sitePublic, "r"), {
  recursive: true,
});
await cp(
  resolve(root, "public/registry.json"),
  resolve(sitePublic, "registry.json"),
);

console.log("Synced registry into site/public");
