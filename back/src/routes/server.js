const { router } = require('./index.js')

const express = require('express');
const cors = require('cors');

// Creo el servidor con express
const server = express();
const PORT = 3001;

server.use(express.json());
server.use(cors());
server.use('/rickandmorty/', router)

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT)
});

module.exports = { server };




// 

// const http = require('http');
// const getCharById = require('../controllers/getCharById.js');
// const getCharDetail = require('../controllers/getCharDetail.js');
// //const characters = require('../utils/data.js')

// const PORT = 3001;

// http.createServer((req, res) => {

//     // Se habilitan los permisos para acceder a los llamados o request
//     // PERMITE CONECTAR EL FRONT CON EL SERVIDOR SIN QUE HAYA PROBLEMAS DE CORS (Control de acceso HTTP)
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     //Se le hace el split con el / para obterner el id de la URL
//     //.at(-1) --> Obtengo la última posición del array
//     let id = req.url.split('/').at(-1);
    
//     // Retorna true or false
//     if(req.url.includes('onsearch')){
//         getCharById(res, id)  
//     }

//     // Retorna true or false
//     if(req.url.includes('detail')){
//         getCharDetail(res, id)  
//     }
// }).listen(PORT, 'localhost')