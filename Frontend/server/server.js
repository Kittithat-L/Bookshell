require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const db = client.db('Bookshell');
const usersCollection = db.collection('users');

app.post('/register', async (req, res) => {
  const { email, username, password, confirmPassword, phone } = req.body;


  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }


  const existingUser = await usersCollection.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Email or Username already exists' });
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await usersCollection.insertOne({ email, username, password: hashedPassword, phone });

    res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login' , async(req , res)=>{
    const {username , password} = req.body;

    const user = await usersCollection.findOne({username});
    if (!user){
        return res.status(400).json({message:'Invalid username or password!'});
    }

    const match = await bcrypt.compare(password , user.password);
    if (!match){
        return res.status(400).json({message:'Invalid username or password!'});
    }
    const token = jwt.sign({userId: user._id , username: user.username} , process.env.JWT_SECRET,{expiresIn: '1hr'});

    res.status(200).json({message:'Login successful' , token});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
