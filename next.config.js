/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "eprojectsem4.blob.core.windows.net",
            },
            {
                protocol: "https",
                hostname: "ducanh-public-images.s3.ap-southeast-1.amazonaws.com",
            },
        ],
    },
};

module.exports = nextConfig;
