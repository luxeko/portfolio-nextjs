/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eprojectsem4.blob.core.windows.net',
                port: '',
                pathname: '/plant-nest/**',
            },
        ],
    },
}

module.exports = nextConfig
