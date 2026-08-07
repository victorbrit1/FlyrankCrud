const Database = require("better-sqlite3")
const fs = require("fs")

const db = new Database("tasks.db")

const sql = fs.readFileSync("tasks.sql","utf-8")

db.exec(sql)

console.log("Banco conectado!")

db.close()