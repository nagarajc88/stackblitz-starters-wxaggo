/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

function loadTargetEnv(target) {
  const envPath = path.join(__dirname, 'env', `.env.${target}`);
  return dotenv.parse(fs.readFileSync(envPath));
}

const nextConfig = {
    env: loadTargetEnv(process.env.TARGET_ENVIRONMENT),
    async redirects() {
        return [
            {
                source: "/",
                destination: "/login",
                permanent: true,
            },
        ];
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
