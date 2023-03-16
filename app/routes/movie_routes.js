const Router = require('express');
const router = new Router();

const movie_controller = require('../controller/movie_controller');

router.get('/movie', movie_controller.getMovies)
router.post('/movie', movie_controller.createMovie)
router.get('/movie/:id', movie_controller.getOneMovie)
router.put('/movie/:id', movie_controller.updateMovie)
router.delete('/movie/:id', movie_controller.deleteMovie)

module.exports = router;