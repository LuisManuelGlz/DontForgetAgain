const express = require('express');
// import path from 'path';
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

// initializations
dotenv.config();
const app = express();
const mongoose = require('./data/database');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static files

// routes
app.use(require('./routes/authRoutes'));

// listening the server
app.listen(app.get('port'), () => {
    console.log(`Server listening on http://localhost:${app.get('port')} 🌎`);
});