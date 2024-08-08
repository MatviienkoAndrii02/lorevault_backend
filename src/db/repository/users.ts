import db from '../index.js';
import { users } from '../schema/users.js';
import { eq } from 'drizzle-orm';

class UserRepository {
  async getUserById(userId: number) {
    return db.select().from(users).where(eq(users.id, userId));
  }

  async getUserByUsername(username: string) {
    return db.select().from(users).where(eq(users.username, username));
  }
  
  async getAllUsers() {
    return db.select().from(users);
  }

  async deleteUserById(userId: number) {
    return db.delete(users).where(eq(users.id, userId));
  }

  async deleteUserByUsername(username: string) {
    return db.delete(users).where(eq(users.username, username));
  }
}

export default new UserRepository();