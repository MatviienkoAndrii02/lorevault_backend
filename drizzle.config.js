import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema",
    out: "./drizzle",
    dbCredentials: {
        url: "postgresql://postgres:postgres@localhost:5432/loreVaultDB?schema=public"
    }
});
