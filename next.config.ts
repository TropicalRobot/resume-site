import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })
        return config
    },
    turbopack: {
        // Example: adding an alias and custom file extension
        resolveAlias: {
            underscore: 'lodash'
        },
        resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json']
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dw2a0dfrl/**'
            }
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    }
}

export default nextConfig
