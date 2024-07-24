import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    username: text("username").unique().notNull(),
    password: text("password").notNull()
  }, 
);
