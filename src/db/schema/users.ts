import { integer, pgTable, text, serial, } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: text("username").unique().notNull(),
    password: text("password").notNull()
  }, 
);
