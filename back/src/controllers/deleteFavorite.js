const favorites = require("../utils/favs");

const deleteFavorite = (req, res) => {
    const { id } = req.params
    if (id) {
        
        // Me filtra en los favoritos los que coincidan con el id
        // que llega por params
        const favoritesFiltered = favorites.filter(item => item.id === id)
        
        if (favoritesFiltered.length !== favorites.length) {
            favorites = favoritesFiltered
            res.status(200).json({ 'succes': true })
        }

        //Forma 2:
        // const listFavorit =  favorites.filter( f => f.id != id);
        // favorites.splice(listFavorit.indexOf(id), 1);
        // res.status(200).json({message: `Favorit with ID ${id} not found`})
    }
}

module.exports = deleteFavorite;