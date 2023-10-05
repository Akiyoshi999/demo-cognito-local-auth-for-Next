/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    USER_POOL_ID: process.env.USER_POOL_ID,
    CLIENT_ID: process.env.CLIENT_ID,
    ID_POOL_ID: process.env.ID_POOL_ID,
    EMAIL: process.env.EMAIL,
    REGION: process.env.REGION,
  },
};

module.exports = nextConfig;
