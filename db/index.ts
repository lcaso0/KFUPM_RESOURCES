import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// TODO: add zod validation for env variables

// ✅ create the connection once
const client = postgres(process.env.DATABASE_URL!);
const db = drizzle({ client, schema });

// ✅ export it as default
export default db;
