import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// TODO: add zod validation for env variables

// ✅ create the connection once
const client = postgres(process.env.DATABASE_URL!);
const db = drizzle({ client });

// ✅ export it as default
export default db;
