import { integer, pgTable, text, serial, } from 'drizzle-orm/pg-core';
import { users } from './users';
import { races } from './races';

export const characters = pgTable('characters', {
    id: serial('id').primaryKey(),
    userId: integer("userId").references(() => users.id),
    name: text('name'),
    race: integer("race").references(() => races.id),
  }, 
  
);
