import React from 'react';
import '../style/Navbar.css';
import Logo from "../assets/images/logo1.gif";
import { Link } from 'react-router-dom';
import firebase from '../utils/firebaseConfig';


const Navbar = () => (
    <nav className="navbar navbar-sticky">
        <div className="navbar--logo-holder">
            <img src={Logo} alt="logo" className="navbar--logo" />
            <h1>CritikArt</h1>

        </div>
        <ul className="navbar--link">
            <li><Link to="/accueil" className="navbar--link-item">Accueil</Link></li>
            <li><Link to="/read" className="navbar--link-item">A l'affiche</Link></li>
            <li><Link to="/create" className="navbar--link-item">Ajout d'un film</Link></li>
            <li><Link to="/contact" className='navbar--link-item'>Contactez-nous</Link></li>
            <button onClick={ () => firebase.auth().signOut() }  className='welcome__cta-primary'>Se déconnecter</button> 
        </ul>
    </nav>
)

export default Navbar