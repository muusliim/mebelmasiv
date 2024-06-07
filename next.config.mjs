/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites() {
        return [
            {
                source: '/robots.txt',
                destination: '/static/robots.txt',
            },
        ]
    },
};

export default nextConfig;