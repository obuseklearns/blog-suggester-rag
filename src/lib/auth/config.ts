import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "@/db/db";
import { serverEnv } from "@/data/serverEnv";
import * as schemas from "@/db/schemas";
import { nextCookies } from "better-auth/next-js";
import { InferSelectModel } from "drizzle-orm";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schemas ,
  }),
  advanced: {
    database: {
      generateId: "uuid",
    },
  },
  secret: serverEnv.BETTER_AUTH_SECRET,
  socialProviders: {
    github: {
      clientId: serverEnv.GITHUB_CLIENT_ID,
      clientSecret: serverEnv.GITHUB_CLIENT_SECRET,
    },  
  },
  plugins: [nextCookies()]
});

export type Session = InferSelectModel<typeof schemas.user>;
