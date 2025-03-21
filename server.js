require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToDatabase = require('./db-connexion/mongoDBConnexion')
const authorRoute = require('./routes/authorRoute')
const bookRoute = require('./routes/bookRoute')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

// Connexion à notre base de données
connectToDatabase()

// Routes pour les livres et les auteurs
app.use('/authors', authorRoute)
app.use('/books', bookRoute)


app.listen(PORT, ()=>{
  console.log(`Le serveur a demaré sur le serveur http://localhost:${PORT}`)
})