const authRoutes = require('./routes/authRoutes')
const registrationRoutes =  require('./routes/registrationRoutes')
const eventRoutes = require('./routes/eventRoutes')
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { connect } = require('mongoose');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For form data

// Import routes
app.use('/api', eventRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/',registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});