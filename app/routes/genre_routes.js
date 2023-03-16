const Router = require('express');
const router = new Router();

const genre_controller = require('../controller/genre_controller');

router.get('/genre', genre_controller.getGenres)
router.post('/genre', genre_controller.createGenre)
router.get('/genre/:id', genre_controller.getOneGenre)
router.put('/genre/:id', genre_controller.updateGenre)
router.delete('/genre/:id', genre_controller.deleteGenre)

module.exports = router;