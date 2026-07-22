import { integer, snakeCase, text } from "drizzle-orm/pg-core";

export const userTable = snakeCase.table("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: text().notNull(),
    
})