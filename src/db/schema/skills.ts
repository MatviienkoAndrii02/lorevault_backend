import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const skills = sqliteTable('skills', {
    id: integer('id').primaryKey(),
    name: text("name").notNull(),
    description: text("description")
  }, 
);
