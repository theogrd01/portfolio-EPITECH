import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  // Remplace par le nom EXACT de ton repo GitHub
  basePath: '/portfolio-EPITECH',
  assetPrefix: '/portfolio-EPITECH/',
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);