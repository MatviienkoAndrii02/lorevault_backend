import { integer, pgTable, text, serial, } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';


export const beasts = pgTable('beasts', {
    id: serial('id').primaryKey(),
    name: text('name').unique().notNull(),
    description: text("description"),
    danger: integer("danger"),
    tags: text('tags')
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
  }, 
);

