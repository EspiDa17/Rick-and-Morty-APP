// CONTROLADOR

const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

// ASYNC AWAIT
const getCharDetail = async (req, res) => {
    
    const { id } = req.params;
    
    try{
        // Petición asincrónica a la url de rick and morty buscando un id en particular
        const { data } = await axios(`${URL}${id}`)
            
            // En caso de que sea exitoso me traigo un arreglo con los
            // datos
                let character = {
                    id: data.id,
                    image: data.image,
                    name: data.name,
                    gender: data.gender,
                    species: data.species,
                    origin: data.origin
                }
                res.status(200).send(character)
        }

        // Si no es exitoso devuelvo la respuesta con el estado 500 y 
        // un mensaje que especifique lo sucedido
        catch(error) {
            res.status(500).send({ message: error.message })
        }
}

module.exports = getCharDetail;






// PROMESAS

// Realizar una petición por un personaje con el ID

// const axios = require('axios');

// const getCharDetail = (res, id) => {
//     // Petición a la url de rick and morty
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
        
//         // En caso de que sea exitoso
//         .then(result => result.data)
//         .then(data => {
//             let character = {
//                 origin: data.origin,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 status: data.status
//             }
//             res.writeHead(200, {'Content-type':'application/json'})
//             res.end(JSON.stringify(character))
//         })

//         // Si no es exitoso
//         .catch(err => {
//             res.writeHead(500, {'Content-type':'text/plain'})
//             res.end(`Character with ${id} ID not found`)
//         })

// }






