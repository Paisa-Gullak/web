import { nanoid } from "@/lib/nanoid";
import { sql, relations } from "drizzle-orm";
import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: int("email_verified", { mode: "boolean" }).notNull(),
  image: text("image"),
  role: text("role"),
  banned: int("banned", { mode: "boolean" }),
  banReason: text("ban_reason"),
  banExpires: int("ban_expires", { mode: "timestamp" }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});
