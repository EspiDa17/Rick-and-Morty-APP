import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './types'
const axios = require('axios');


// Las actions retornan el objeto acción despachada añl reducer
export function addFavorite(fav){
    return {
        type: ADD_FAVORITE,
        payload: fav
    }
}

// export const addFavorite = (fav) => {
//     return async function(dispatch){
//         try {
//             const request = await axios.post(`https://localhost:3001/rickandmorty/fav`, fav);
//             return dispatch({ type: ADD_FAVORITE, payload: request.data });
//         }
//         catch(error){
//             throw new Error(error);
//         }
//     }
// }

// export function getFavorite(fav){
//     return async function(dispatch){
//         try {
//             const request = await axios.get('https://localhost:3001/rickandmorty/fav',fav)
//             return dispatch({ type: GET_FAVORITES, payload: request.data })
//         }
//         catch(error){
//             throw new Error(error.message);
//         }
//     }
// }

// export function deleteFavorite(id){
//     return async function(dispatch){
//         try {
//             const request = await axios.get('https://localhost:3001/rickandmorty/fav:id',id)
//             return dispatch({ type: DELETE_FAVORITE, payload: request.data })
//         }
//         catch(error){
//             throw new Error(error.message);
//         }
//     }
// }

// Las actions retornan el objeto acción despachada añl reducer
export function deleteFavorite(id){
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

//Dos funciones que retornan acciones
export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        paiload: id
    }
}