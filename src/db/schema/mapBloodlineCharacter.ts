import { integer, pgTable, serial, } from 'drizzle-orm/pg-core';
import { characters } from './characters';
import { masteries } from './mastery';

export const mapBloodlineCharacter = pgTable('mapBloodlineCharacter', {
    id: serial('id').primaryKey(),
    characterId: integer("characterId").references(() => characters.id),
    bloodlineId: integer("bloodlineId").references(() => masteries.id),
    percentage: integer("percentage")
  }, 
);
