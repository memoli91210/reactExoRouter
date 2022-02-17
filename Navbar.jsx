import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <nav id="navBar">
        <Link to="/"> Accueil </Link>
        <Link to="/connexion"> Connexion </Link>
        <Link to="/inscription"> Inscription </Link>
        
      </nav>
    );
}
