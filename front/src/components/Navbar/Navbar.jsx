import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from './Navbar.module.css'

import { Link } from "react-router-dom";

// Componente padre de SearchBar
export default function Navbar({ onSearch }){
    return (
        <div className={style.container}>
            <Link className={style.home} to='/home'>Home</Link>
            <Link className={style.about} to='/about'>About</Link>
            <Link className={style.favorites} to='/favorites'>Favorites</Link>
            <SearchBar onSearch={onSearch}/>
            <Link className={style.logOut} to='/'>LogOut</Link>
        </div>
    )
}