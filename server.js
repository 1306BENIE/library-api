require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToDatabase = require('./db-connexion/mongoDBConnexion')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

// Connexion à notre base de données
connectToDatabase()


app.listen(PORT, ()=>{
  console.log(`Le serveur a demaré sur le serveur http://localhost:${PORT}`)
})