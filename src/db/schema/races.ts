import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const races = sqliteTable('races', {
    id: integer('id').primaryKey(),
    name: text("name").unique().notNull(),
  }, 
);
