import Card from '../Card/Card';
import styled from 'styled-components'

//Componente estilizado para el div
const Div = styled.div`
   display: flex;
   justify-content: center;
`


export default function Cards(props) {
   //Me traigo con destructuring characters de props
   const { characters } = props;
   return ( 
      <Div>
         {/* por cada caracter se va a renderizar una tarjeta */}
         {characters.map(character => 
         // Uso el componente Card
         < Card 
            key={character.name}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            id={character.id}
            onClose = {props.onClose}
         />)}
      </Div>
   );
}
