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
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
});
