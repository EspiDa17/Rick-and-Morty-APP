import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
//import characters, { Rick } from './data.js'
import Navbar from './components/Navbar/Navbar.jsx'

import { Routes, Route } from 'react-router-dom'; 
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'

//Componente funcional --> Padre
function App () {

  // Me permite ir a rutas
  const location = useLocation();
  const navigate = useNavigate();
  
  //Estado(Memoria) para el componente
  const [characters, setCharacters] = useState([]);

  //Estado de acceso
  const [access, setAccess] = useState(false);
  // Base de datos
  const username = 'danieles095@outlook.es';
  const password = 'daniel123';

  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };

  // Verifica que el usuario si corresponda al de la base de datos - si corresponde nos lleva a home
  function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  // Función que modifica el estado characters
  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id!== id))
  }

  // Se ejecuta cada vez que se monta el componente
  // Si acces esta en false me manda a / -- Al login
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  return (
    <div className='App' style={{ padding: '10px' }}>
      {/* Si la locacion no es / me muestra navbar */}
      {location.pathname !== '/' && <Navbar onSearch={onSearch}/>}
      <Routes>
        {/* exact --> Cuando es solo barra */}
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        {/* Cuando ingresan a una ruta que no está definida */}
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
