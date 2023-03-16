const { Movie } = require('../db/models');

class MovieController {
    async createMovie(req, res) {
        const {movie_name, world_year_release} = req.body;
        const newMovie = await Movie.create({
            movie_name : movie_name,
            world_year_release : world_year_release
        })
        res.json(newMovie);
    }
    async getMovies(req, res) {
        const movies = await Movie.findAll();
        res.json(movies);
    }
    async getOneMovie(req, res) {
        const id = req.params.id;
        const movie = await Movie.findOne({ where : { movie_id: id } })
        res.json(movie);
    }
    async updateMovie(req, res) {
        const choiceId = req.params.id;
        const {movie_name, world_year_release} = req.body;
        await Movie.update({
            movie_name : movie_name,
            world_year_release : world_year_release
        }, {
            where: {
                movie_id : choiceId
            }
        })
        const result = await Movie.findOne({ where : { movie_id: choiceId } });
        res.json(result);
    }
    async deleteMovie(req, res) {
        const id = req.params.id;
        await Movie.destroy({
            where: {
                movie_id : id
            }
        })
        res.json("Success!");   
    }
}

module.exports = new MovieController();