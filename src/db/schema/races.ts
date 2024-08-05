import { pgTable, text, serial, } from 'drizzle-orm/pg-core';

export const races = pgTable('races', {
    id: serial('id').primaryKey(),
    name: text("name").unique().notNull(),
  }, 
);
