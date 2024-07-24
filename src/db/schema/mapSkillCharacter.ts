import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import { characters } from './characters';
import { skills } from './skills';

export const mapSkillCharacter = sqliteTable('mapSkillCharacter', {
    id: integer('id').primaryKey(),
    characterId: integer("characterId").references(() => characters.id),
    skillId: integer("skillId").references(() => skills.id),
  }, 
);
