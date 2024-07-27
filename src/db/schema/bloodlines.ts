import { pgTable, text, serial, } from 'drizzle-orm/pg-core';


export const bloodlines = pgTable('bloodlines', {
    id: serial('id').primaryKey(),
    name: text('name').unique().notNull(),
    description: text("description"),
  }, 
);

