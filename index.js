const express = require('express');

const apiRoutes = require('./server/apiRoutes');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes());

app.listen(3000,() =>{
    console.log('Server is up...');
})







// const { Sequelize } = require('sequelize');
// const moment = require('moment');

// const addMovie = async () => {
//     const movieId = `MV- ${moment().unix()}`;
//     const record = {
//         movieId,
//         title: 'Batman',
//         year: 2020,
//         length: '120 min',
//         actors: 'Robert'
//     }

//     const result = await Movie.create(record);

//     console.log(result.toJSON());
// }
// addMovie();


// const connectToDb = async() =>{
//     const sequelize = new Sequelize('postgres', 'postgres', 'Manjumukesh@18', {
//         host: 'localhost',
//         dialect: 'postgres'
//       });
//       try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//     }

// connectToDb()