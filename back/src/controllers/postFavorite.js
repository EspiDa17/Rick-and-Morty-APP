const favorites = require('../utils/favs');

const postFavorite = async (req, res) => {
    
    // Me traigo la info de character del cuerpo de la petición POST
    const { character } = req.body;
    
    // Si en el body de la petición POST llega un character
    // lo agregue a la base de datos (arreglo)
    if(character){
        favorites.push(character)
    }

    try {
        res.status(200).send('add new character to favorite list')
    }
    catch(error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = postFavorite;