

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // appDir: true,
      missingSuspenseWithCSRBailout: false,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '**',
        },
      ],
      // domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig