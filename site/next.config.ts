import type { NextConfig } from "next";
import { resolve } from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  images: { unoptimized: true },
  trailingSlash: true,
  outputFileTracingRoot: resolve(__dirname),
};

export default nextConfig;
