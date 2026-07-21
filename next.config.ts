import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    useTypeScriptCli: true,
    turbopackMemoryEviction: false,
    turbopackFileSystemCacheForBuild: true,
    turbopackRustReactCompiler: true,
    turbopackLocalPostcssConfig: true,
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
