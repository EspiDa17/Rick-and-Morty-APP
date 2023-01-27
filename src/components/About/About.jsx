import React from "react";
import styles from './About.module.css'

//Componente
export default function About(){
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h1 className={styles.letter}> Hi, i am Daniel Espinal Gil</h1>
            <br/>
            <h2 className={styles.letter}>I will be a Full Stack Web Developer</h2>
            <h2 className={styles.letter}>This is my first web application </h2>
            <h2 className={styles.letter}>using JavaScript, HTML, CSS and React</h2>
        </div>
    )
}