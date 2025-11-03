import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

// databaseName: process.env.DB_USERNAME,
// DB_PASSWORD: process.env.DB_PASSWORD,
// DB_HOST: process.env.DB_HOST,
// DB_PORT: process.env.DB_PORT,
// DB_DATABASE: process.env.DB_DATABASE,
// DATABASE_URL:
//   `postgres://${databaseName}:${DB_PASSWORD}` +
//   `@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      // database_extra: { ssl: { rejectUnauthorized: false } },
      jwtSecret:
        process.env.JWT_SECRET ||
        "e088f0d65f2cde7ee7c7a19dd63c1fa4f7d24e3f0f8e1729e53b0c6f35131242",
      cookieSecret:
        process.env.COOKIE_SECRET ||
        "0b64ac5e93bbdec094be71eb55e119492443782a72d171a666bfd38ac29d1a22",
    },
  },
});
