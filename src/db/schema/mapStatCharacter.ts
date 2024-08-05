import { integer, pgTable, serial, } from 'drizzle-orm/pg-core';
import { characters } from './characters';
import { stats } from './stats';

export const mapStatCharacter = pgTable('mapStatCharacter', {
    id: serial('id').primaryKey(),
    characterId: integer("characterId").references(() => characters.id),
    statId: integer("statId").references(() => stats.id),
  }, 
);
