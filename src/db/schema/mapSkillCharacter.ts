import { integer, pgTable, serial, } from 'drizzle-orm/pg-core';
import { characters } from './characters';
import { skills } from './skills';

export const mapSkillCharacter = pgTable('mapSkillCharacter', {
    id: serial('id').primaryKey(),
    characterId: integer("characterId").references(() => characters.id),
    skillId: integer("skillId").references(() => skills.id),
  }, 
);
