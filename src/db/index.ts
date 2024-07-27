import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Client } = pkg;


const client = new Client({
    // connectionString: process.env.DATABASE_URL,
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "loreVaultDB",
  });

await client.connect()
const db = drizzle(client);


export default db
