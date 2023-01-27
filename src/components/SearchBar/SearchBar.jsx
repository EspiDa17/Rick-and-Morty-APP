import { useState } from 'react';
import style from './SearchBar.module.css'


//Componente funcional
export default function SearchBar(props) {

   //Estado(Memoria)
   const [character, setCharacter] = useState('');

   // Función que me setea el estado
   const handleChange = (e) => {
      //Opción 1:
      // setCharacter({
      //    character: e.target.value
      // })

      //Opción 2:
      const { value } = e.target
      setCharacter(value)
   }

   return (
      <div>
         <input className={style.input} type='search' placeholder='Search character' onChange={handleChange}/>
         <button className={style.button} onClick={() => props.onSearch(character)}>Add</button>
      </div>
   );
}
