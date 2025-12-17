import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || "joshi",
  password: process.env.PGPASSWORD || "1234",
  database: process.env.PGDATABASE || "joseph",
});

"insert into table_name (colq,col2,col3) values(1,2,3,4)"
