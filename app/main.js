const express = require('express');
const movieRouter = require('./routes/movie_routes');
const genreRouter = require('./routes/genre_routes');
const dotenv = require('dotenv');
const db = require('./db/db');
dotenv.config() 

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

db.authenticate() 
    .then(() => console.log('Connection has been established successfully.')) 
    .catch(err => console.error('Unable to connect to the database:', err))
            
app.use(express.json());
app.use('/api', movieRouter, genreRouter);


app.listen( PORT, () => console.log(`Server started on port ${PORT}`));