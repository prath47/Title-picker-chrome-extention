import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "test",
  })
  .promise();

export async function getUser() {
  const result = await pool.query("select * from user");
  const userData = result[0];
  return userData;
}

export async function getUserbyId(id) {
  const result = await pool.query("select * from user where id = ?", [id]);
  const userData = result[0];
  return userData;
}

export async function createUser(
  name = "John Doe",
  location = "New York",
  about = "I am a developer",
  bio = "I am a developer",
  followers_count = 0,
  connection_count = 0,
  url = "https://www.linkedin.com/in/john-doe"
) {
  // person’s name, location, about, bio, follower count, connection count and bio line
  const data = await pool.query(
    "insert into user (name , location , about , bio , followers_count , connection_count , url) values (?, ?, ?, ?, ?, ? , url)",
    [name, location, about, bio, followers_count, connection_count, url]
  );

  const id = data[0].insertId;
  return getUserbyId(id);
}

