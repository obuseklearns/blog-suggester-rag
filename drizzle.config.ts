import { config } from 'dotenv';
import { serverEnv } from '@/data/serverEnv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: serverEnv.DATABASE_URL!,
  },
});
