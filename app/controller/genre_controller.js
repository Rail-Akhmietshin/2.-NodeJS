const { Genre } = require('../db/models');

class GenreController {
    async createGenre(req, res) {
        const {genre_name} = req.body;
        const newGenre = await Genre.create({
            genre_name : genre_name,
        })
        res.json(newGenre);
    }
    async getGenres(req, res) {
        const genres = await Genre.findAll();
        res.json(genres);
    }
    async getOneGenre(req, res) {
        const id = req.params.id;
        const genre = await Genre.findOne({ where : { genre_id: id } })
        res.json(genre);
    }
    async updateGenre(req, res) {
        const choiceId = req.params.id;
        const {genre_name} = req.body;
        await Genre.update({
            genre_name : genre_name,
        }, {
            where: {
                genre_id : choiceId
            }
        })
        const result = await Genre.findOne({ where : { genre_id: choiceId } })
        res.json(result);
    }
    async deleteGenre(req, res) {
        const id = req.params.id;
        await Genre.destroy({
            where: {
                genre_id : id
            }
        })
        res.json("Success!");   
    }
}

module.exports = new GenreController();