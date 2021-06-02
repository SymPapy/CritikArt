import React from 'react';
import "./Navbar.css";
import Logo from "../../assets/images/logo1.gif";
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav className="navbar navbar-sticky">
        <div className="navbar--logo-holder">
            <img src={Logo} alt="logo" className="navbar--logo" />
            <h1>CritikArt</h1>
            <section><input type="text" placeholder="Rechercher un film"></input></section>
        </div>
        <ul className="navbar--link">
            <li><Link to="/accueil" className="navbar--link-item">Accueil</Link></li>
            <li><Link to="/" className="navbar--link-item">A l'affiche</Link></li>
            <li><Link to="/" className="navbar--link-item">Genre</Link></li>
            <li><Link to="/" className="navbar--link-item">Dernier ajout</Link></li>
            <li><Link to="/contact" className='welcome__cta-primary'>Contactez-nous</Link></li>
        </ul>
    </nav>
)

export default Navbar