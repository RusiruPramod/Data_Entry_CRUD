const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());



app.get('/api/:id', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
})

app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.status(201).json({ message: 'Data received', data: receivedData });
});

app.put('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.status(200).json({ message: `Data with id ${id} updated`, data: updatedData });
});


app.delete('/api/data/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Data with id ${id} deleted` });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});