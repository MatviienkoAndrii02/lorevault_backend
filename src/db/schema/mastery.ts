import { integer, pgTable, text, serial } from 'drizzle-orm/pg-core';

export const masteries = pgTable('masteries', {
    id: serial('id').primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    level: integer('level').default(0),
    expirience: integer("expirience").default(0),
    expirienceToNextLvl: integer("expirienceToNextLvl")
  }, 
);
