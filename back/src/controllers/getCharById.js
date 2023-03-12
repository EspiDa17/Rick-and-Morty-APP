// CONTROLADOR

const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

// ASYNC AWAIT
const getCharById = async (req, res) => {
    
    const { id } = req.params;
    
    try {
        // Petición asincrónica a la url de rick and morty buscando un id en particular
        const { data } = await axios(`${URL}${id}`)
            
            // En caso de que sea exitoso me traigo un arreglo con los
            // datos
                let character = {
                    id: data.id,
                    image: data.image,
                    name: data.name,
                    gender: data.gender,
                    species: data.species
                }
                res.status(200).send(character)
        }

        // Si no es exitoso devuelvo la respuesta con el estado 500 y 
        // un mensaje que especifique lo sucedido
        catch(error) {
            res.status(500).send({ message: error.message })
        }
}


module.exports = getCharById;




// PROMESAS

// Realizar una petición por un personaje con el ID

// Realizo una petición con axios a la api de ricky and morty y manejo
// el resultado de la operación con el caso exitoso y el caso fallido

// const axios = require('axios');

// const getCharById = (res, id) => {
    
//     // Petición a la url de rick and morty buscando un id en particular
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
        
//         // En caso de que sea exitoso me traigo un arreglo con los
//         // datos
//         .then(result => result.data)
//         .then(data => {
//             let character = {
//                 id: data.id,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species
//             }

//             // Devuelvo la respuesta con el estado 200 y finalmente 
//             // respondo el objeto del objeto creado en formato JSON
//             res.writeHead(200, {'Content-type':'application/json'})
//             res.end(JSON.stringify(character))
//         })

//         // Si no es exitoso devuelvo la respuesta con el estado 500 y 
//         // un mensaje que especifique lo sucedido
//         .catch(err => {
//             res.writeHead(500, {'Content-type':'text/plain'})
//             res.end(`Character with ${id} ID not found`)
//         })

// }


