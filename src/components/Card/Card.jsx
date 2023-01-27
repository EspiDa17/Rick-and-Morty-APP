//Me va a renderizar solo una card

import { Link } from 'react-router-dom';
// Para hacer componentes estilizados
import styles from './Card.module.css'

import { addFavorite, deleteFavorite } from '../../redux/actions/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


//Componente funcional Hijo -- Padre Cards
export function Card(props) {

   //Estado local
   const [isFav, setIsFav] = useState(false);
   // const [isFav, setIsFav] = [false, f()]
   // isFav = false, setIsFvav = f(){}

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.id);
      }
      else{
         setIsFav(true);
         props.addFavorite(props)
      }
   }

   // CIclo de vida del componente
   // Se ejecuta cuando en el componente haya una actualización en props.myFavorites
   useEffect(() => {
      // Si hay algo en favoritos haga el forEach, 
      props.myFavorites?.forEach((fav) => {
         // Si el id de lo que está en favoritos coincide con el id que viene por props setea en true el estado isFav
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   return (
      <div className={styles.div}>
         {isFav ? (<button className={styles.button0} onClick={handleFavorite}>❤️</button>) : (<button className={styles.button0} onClick={handleFavorite}>🤍</button>)}
         {/* onClose es una funcion que viene por props y que tiene que ejecutarse*/}
         <button className={styles.button1} onClick={() => props.onClose(props.id)}>X</button>
         <br/>
         <Link to={`/detail/${props.id}`}>
            <button className={styles.button2}>{props.name}</button>
         </Link>
         <h2 className={styles.h1}>{props.species}</h2>
         <h2 className={styles.h1}>{props.gender}</h2>
         <img className={styles.img} src={props.image} alt="img not found" />
      </div>
   );
}


// Me proporciona los parametros para agregar o eliminar 
export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },

      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}


// Si no vamos a traernos el estado , null el primer parámetro
export default connect(mapStateToProps, mapDispatchToProps)(Card)
