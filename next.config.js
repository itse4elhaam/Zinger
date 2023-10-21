/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                port: '',
                pathname: '/s/files/1/0553/9672/8890/products/**',
            },
        ],
    },
}

module.exports = nextConfig

