import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './types'


// Las actions retornan el objeto acción despachada añl reducer
export function addFavorite(fav){
    return {
        type: ADD_FAVORITE,
        payload: fav
    }
}

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