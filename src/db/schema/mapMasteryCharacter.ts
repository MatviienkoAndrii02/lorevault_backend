import { integer, pgTable, serial, } from 'drizzle-orm/pg-core';
import { characters } from './characters';
import { masteries } from './mastery';

export const mapMasteryCharacter = pgTable('mapMasteryCharacter', {
    id: serial('id').primaryKey(),
    characterId: integer("characterId").references(() => characters.id),
    masteryId: integer("masteryId").references(() => masteries.id),
  }, 
);
