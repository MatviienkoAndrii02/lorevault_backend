import { pgTable, text, serial, } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';



export const books = pgTable('books', {
    id: serial('id').primaryKey(),
    name: text('name').unique().notNull(),
    description: text("description"),
    tags: text('tags')
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
  }, 
);

