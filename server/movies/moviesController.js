const moment = require('moment');
const { isEmpty } = require("lodash");
const { Op } = require("sequelize");

const { Movie } = require('../../model');

const createNewMovie = async (req, res) => {
    const { title, year, length, actors } = req.body;

    const movieId = `MV-${moment().unix()}`;
    const movieRecord = {
        movieId,
        title,
        year,
        length,
        actors
    }

    const result = await Movie.create(movieRecord);
    console.log(result.toJSON());

    if (!isEmpty(result)) {
        res.send(result);
    } else {
        res.send({ error: "Movie creations Failed" });
    }
}

const listMovies = async(req, res) => {
    const movies = await Movie.findAll();
    
    const formattedMovie = movies.map(r => r.get({ plain:true }));

    if(!isEmpty(formattedMovie)){
        res.send(formattedMovie);
    } else{
        res.send({ error : "Movie creations failed" });
    }
}

const searchMovieTitle = async(req, res) => {
    const { title } = req.params;

    const searchResult = await Movie.findAll({
        where: {
            title: {
                [Op.like]: `%${title}%`,
            }
        },
        raw: true
    });

    console.log(searchResult);

    if (isEmpty(searchResult)) {
        res.send({ message: 'No record found' });
    } else if (isEmpty(searchResult)){
        res.send(searchResult);
    }
}

const updateMovie = async(req, res) => {
    const { movieId } = req. params;

    const searchResult = await Movie. findOne({
        where: {
            movieId: movieId
        },
        raw: true
    });

    const title = searchResult.title;
    const { year, length, actors } = req.body;
    const movieRecord = { title, year, length, actors };

    const updatedMovie = await Movie.update(movieRecord, {
        where: {
            movieId: movieId
        }
    });

    res.send("Successfully updated the data..!!!");
}

const deleteMovie = async(req, res) => {
    const { movieId } = req.params;

    const searchResult = await Movie.findOne({
        where: {
            movieId: movieId
        }
    });
    if(searchResult) {
        const deleteMovie = await Movie.destroy({
            where:{
                movieId: movieId
            }
        });
        res.send("Successfully deleted the movie..!!!");
    }
    else{
        res.send("No record found by this ID..!!");
    }
}

module.exports = {
    createNewMovie,
    listMovies,
    searchMovieTitle,
    updateMovie,
    deleteMovie
}