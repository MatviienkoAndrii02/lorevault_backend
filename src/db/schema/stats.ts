import { integer, pgTable, text, serial, } from 'drizzle-orm/pg-core';

export const stats = pgTable('stats', {
    id: serial('id').primaryKey(),
    name: text("name").notNull(),
    level: integer('level').default(0),
    expirience: integer("expirience").default(0),
    expirienceToNextLvl: integer("expirienceToNextLvl")
  }, 
);
