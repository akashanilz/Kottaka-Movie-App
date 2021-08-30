import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'
function Category() {
    return (
        <div class="scrollmenu">
            <Link to="/">Home</Link>
           <Link to="/webshows" >Web Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/tv">TV</Link>
            <Link to="/documentary">Documentry</Link>
            <Link to="/short-films">Short Films</Link>
        </div>
    )
}

export default Category
