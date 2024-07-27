import { integer, pgTable, text, serial, boolean } from 'drizzle-orm/pg-core';

export const skills = pgTable('skills', {
    id: serial('id').primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    isLearned: boolean("isLearned").default(false),
    level: integer('level').default(0),
    expirience: integer("expirience").default(0),
    expirienceToNextLvl: integer("expirienceToNextLvl")
  }, 
);
