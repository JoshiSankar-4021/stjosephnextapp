import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || "joshi",
  password: process.env.PGPASSWORD || "1234",
  database: process.env.PGDATABASE || "joseph",
});

