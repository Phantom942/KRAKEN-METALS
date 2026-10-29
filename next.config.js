/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'KRAKEN-METALS';
const useBasePath = process.env.GITHUB_ACTIONS === 'true' && process.env.CUSTOM_DOMAIN !== 'true';
const basePath = useBasePath ? `/${repoName}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
