const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Manjumukesh@18', {
    host: 'localhost',
    dialect: 'postgres'
  });

const Movie = sequelize.define('Movie', {
    // Model attributes are defined here
    movieId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.STRING
    },
    actors: {
        type: DataTypes.STRING
    }
    }, {
        tableName: "movies",
        underscored: true,
        timestamps: false
  });
  
  console.log(Movie === sequelize.models.Movie); 

  module.exports = Movie;