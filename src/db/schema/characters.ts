import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { users } from './users';
import { races } from './races';

export const characters = sqliteTable('characters', {
    id: integer('id').primaryKey(),
    userId: integer("userId").references(() => users.id),
    name: text('name'),
    race: integer("race").references(() => races.id),
  }, 
  
);
