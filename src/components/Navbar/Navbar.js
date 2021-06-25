import React, { Fragment } from 'react';
import './Navbar.css';
// import Logo from "../../assets/images/logo1.gif";
// import { Link } from 'react-router-dom';
import firebase from '../../utils/firebaseConfig';
import { Navbar, Nav, Button } from 'react-bootstrap';


const NavBar = () => (
<Fragment>

  <Navbar bg="dark" sticky="top" expand="lg">
    <Navbar.Brand>
        <h1>CritikArt</h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link href="/accueil" className="navbar--link-item">Accueil</Nav.Link>
        <Nav.Link href="/read" className="navbar--link-item">A l'affiche</Nav.Link>
        <Nav.Link href="/create" className="navbar--link-item">Ajout d'un film</Nav.Link>
        <Nav.Link href="/contactUs" className="navbar--link-item">Contactez-nous</Nav.Link>
        <Button onClick={ () => firebase.auth().signOut() } variant="outline-danger">Se déconnecter</Button>
    </Nav>
      </Navbar.Collapse>
  </Navbar>

</Fragment>
    // <nav className="navbar navbar-sticky">
    //     <div className="navbar--logo-holder">
    //         <img src={Logo} alt="logo" className="navbar--logo" />
    //         <h1>CritikArt</h1>
    //     </div>
    //     <ul className="navbar--link">
    //         <li><Link to="/accueil" className="navbar--link-item">Accueil</Link></li>
    //         <li><Link to="/read" className="navbar--link-item">A l'affiche</Link></li>
    //         <li><Link to="/create" className="navbar--link-item">Ajout d'un film</Link></li>
    //         <li><Link to="/contactUs" className='navbar--link-item'>Contactez-nous</Link></li>
    //         <li><button onClick={ () => firebase.auth().signOut() }  className='welcome__cta-primary'>Se déconnecter</button></li>
    //     </ul>
    // </nav>
)
// le bouton se déconnecter en fonction, ne fonctionne pas car utilisation de la fct Push dans l'auhtentification pour revenir sur l'accueil
// du coup j'ai tricher avec une redirection sur la page d'authentification
export default NavBar