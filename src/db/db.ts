import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { serverEnv } from "@/data/serverEnv";
import { relations } from "./relations";

config({ path: ".env" }); // or .env.local

const sql = neon(serverEnv.DATABASE_URL!);
export const db = drizzle({ client: sql, relations });