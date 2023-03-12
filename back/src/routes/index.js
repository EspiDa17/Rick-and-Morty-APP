const { Router } = require("express");

// Controllers
const getCharById = require('../controllers/getCharById.js');
const getCharDetail = require('../controllers/getCharDetail.js');
const getFavorite = require('../controllers/getFavorite.js');
const postFavorite = require('../controllers/postFavorite.js');
const deleteFavorite = require('../controllers/deleteFavorite.js');

const router = Router();

router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)
router.get('/fav', getFavorite)
router.post('/fav', postFavorite)
router.delete('/fav/:id', deleteFavorite)

module.exports = { router };

