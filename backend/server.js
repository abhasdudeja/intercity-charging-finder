const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Test Route
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

// Charging recommendations route
app.post('/api/recommend-charging', (req, res) => {
  const { origin, destination, evModel } = req.body;
  // You can add your charging logic here based on your DB
  res.json({ message: 'Charging locations fetched successfully', data: [] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
