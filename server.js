require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query("SELECT NOW()")
  .then(result => {
    console.log("Connected to Render!");
    console.log(result.rows[0]);
  })
  .catch(error => {
    console.error("Connection failed:", error.message);
  })
  .finally(() => pool.end());