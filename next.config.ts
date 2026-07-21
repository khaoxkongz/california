import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    useTypeScriptCli: true,
    turbopackMemoryEviction: false,
    turbopackFileSystemCacheForBuild: true,
    turbopackRustReactCompiler: true,
    turbopackLocalPostcssConfig: true,
  },
};

export default nextConfig;
