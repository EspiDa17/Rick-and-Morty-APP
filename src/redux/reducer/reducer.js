import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from '../actions/types'

const initialState = {
    myFavorites: [],
    allCharacters: []
};

//
function rootReducer (state=initialState, { type, payload }){
    switch(type){
        //Caso para agregar personaje
        case ADD_FAVORITE:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                // LE concateno el nuevo personaje
                myFavorites: [...state.myFavorites, payload]
            }

        case DELETE_FAVORITE:
            // Busca en todos lo elementos y filtra los que sean diferentes al payload
            // Filter --> devuelve un arreglo
            const filtered = state.myFavorites.filter(fav => fav.id !== payload)
            return {
                ...state,
                myFavorites: filtered
            }

        case FILTER:
            //Me trae todo lo que está en allCharacters
            const filterCopy = [...state.allCharacters]
            // Filtro los personajes que el genero coincida con el payload (lo que me envía la acción)
            const filterGender = filterCopy.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: filterGender
            }

        case ORDER:
            const orderCopy = [...state.allCharacters];
            //a y b van a ser elementos del arreglo
            const order = orderCopy.sort((a,b) => {
                if(a.id > b.id){
                    // Si mi payload es ascendente, entonces lo muevo a la derecha : sino a la izquierda
                    // Esto es otra especie de IF - TERNARIO
                    return payload === 'Ascendente'? 1 : -1
                }
                if(b.id > a.id){
                    return payload === 'Descendente' ? -1 : 1
                }
                // Si tienen el mismo id los deja quietos, no los muve
                else return 0
            })

            return {
                ...state,
                myFavorites: order
            }
        
        default:
            return state
    }
}


export default rootReducer;