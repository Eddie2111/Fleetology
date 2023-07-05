/** @type {import('next').NextConfig} */
const { DefinePlugin } = require('webpack')
const dotenv = require('dotenv')

dotenv.config()

const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    ...nextConfig,
    webpack(config) {
        config.plugins.push(
            new DefinePlugin({
                'process.env.NEXT_PUBLIC_MAPBOX_PUBLIC': JSON.stringify(
                    process.env.NEXT_PUBLIC_MAPBOX_PUBLIC
                ),
                'process.env.NEXT_PUBLIC_MAPBOX_STYLE': JSON.stringify(
                    process.env.NEXT_PUBLIC_MAPBOX_STYLE
                ),
            })
        )
        return config
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'flowbite.com',
                port: '',
            },
        ],
    },
}
