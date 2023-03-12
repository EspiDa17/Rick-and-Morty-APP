import { connect } from "react-redux"
import Card from "../Card/Card"
import styles from './Favorites.module.css'
import { orderCards, filterCards } from '../../redux/actions/actions'
import { useDispatch } from "react-redux"

export function Favorites ({ myFavorites }){

    const dispatch = useDispatch();

    const handleDispatch = (e) => {
        //Me trae el nombre y el valor de los selects
        const { name, value } = e.target;
        
        // Si el nombre del select es order despacho la acción con el value
        if(name === 'order'){
            return dispatch(orderCards(value))
        }

        if(name === 'filter'){
            return dispatch(filterCards(value))
        }
    }



    return (
        <div className={styles.div}>
            <div>
                {/* los selects deben tener un nombre */}
                <select className={styles.select1} name='order' onClick={handleDispatch}>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select >
                <select className={styles.select2} name='filter' onClick={handleDispatch}>
                <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='Unknown'>Unknown</option>
                </select>
            </div>
            { myFavorites?.map(fav => (
                <Card
                name={fav.name}
                id={fav.id}
                key={fav.id}
                gender={fav.gender}
                image={fav.image}
                />
            )) }
        </div>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites)