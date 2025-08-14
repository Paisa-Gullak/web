import { sql } from "drizzle-orm";
import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";
import { user } from ".";
import { nanoid } from "@/lib/utils";

export const session = sqliteTable("session", {
  id: text("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  expiresAt: int("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  impersonatedBy: text("impersonated_by"),
});

export const account = sqliteTable("account", {
  id: text("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: int("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: int("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});

export const verification = sqliteTable("verification", {
  id: text("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: int("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});
