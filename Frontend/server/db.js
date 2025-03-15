require('dotenv').config();
const { MongoClient } = require('mongodb');


const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

module.exports = client;
