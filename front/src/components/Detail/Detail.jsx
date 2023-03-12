import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css'

export default function Detail(){

    // Estado local con el nombre character
    // El valor inicial es un objeto vacío
    const [character, setCharacter] = useState({});

    // Nos traemos el id del personaje
    const { detailId } = useParams(); 

    // useEffect --> Ciclo de vida de los componentes dentro de los componentes funcionales
    // Hace la petición del objeto, lo guarda y luego retorna un objeto vacío
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID 10");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID 20");
          });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className={styles.div}>
            {/* Boton que me devuelve a home */}
            <h1 className={styles.h1}>{character.name}</h1>
            <h2 className={styles.h2}>{character.gender}</h2>
            <h2 className={styles.h2}>{character.origin?.name}</h2>
            <h2 className={styles.h2}>{character.location?.name}</h2> 
            <img className={styles.img} src={character.image} alt='not found'/>    
        </div>
    )
}