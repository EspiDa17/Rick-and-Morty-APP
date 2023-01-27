import React from "react";
import validation from "./validation";
import styles from './Form.module.css' 

export default function Form (props){

    //Estado 
    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    })

    //Estado 
    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    })

    //Función para setear el estado
    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        )
    }

    const handleSubmit = (e) => {
        // Para que no actualice
        e.preventDefault();

        props.login(userData);
    }

    return (
        <div className={styles.div}>
            <form onSubmit={handleSubmit}>
                <br/>
                <label className={styles.lavel} >Username: </label>
                <input type='text' name='username' value={userData.username} onChange={handleInputChange} className={errors.username && styles.warning}/>
                <p className='danger'>{errors.username}</p>

                <label className={styles.lavel} >Password: </label>
                <input type='password' name='password' value={userData.password} onChange={handleInputChange} className={errors.password && styles.warning}/>
                <p className='danger'>{errors.password}</p>
                
                <button className={styles.button} type='submit'>LOGIN</button>
            </form>
        </div>   
    )
}