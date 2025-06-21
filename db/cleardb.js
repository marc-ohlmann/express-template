#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = 'DROP TABLE IF EXISTS usernames;';

async function main() {
  console.log("clearing...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();