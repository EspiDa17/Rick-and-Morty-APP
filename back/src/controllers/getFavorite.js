const favorites = require("../utils/favs");

const getFavorite = async (req, res) => {
    try {
        res.status(200).send(favorites)
    }
    catch(error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = getFavorite;