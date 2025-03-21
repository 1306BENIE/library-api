require('dotenv').config();
const mongoose = require('mongoose');

// Connexion à la base de données

const mongoDBConnexion = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('[] Connexion à MongoDB réussie!');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB:', error);
    process.exit(1);
  }
}
  
module.exports = mongoDBConnexion;
