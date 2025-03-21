require('dotenv').config();

const PASSWORD = process.env.PASSWORD
const encodedPasswords = encodeURIComponent(PASSWORD)

console.log("[] pasword encoded",encodedPasswords)