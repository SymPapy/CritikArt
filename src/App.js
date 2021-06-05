import React from 'react';
import Navbar from "./components/Navbar"
import Contact from './components/Contact.js';
import Accueil from './components/Accueil.js';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
    <div className="container-fluid">
      <Navbar />
      <Route exact path="/accueil" component={Accueil} />
      <Route exact path="/contact" component={Contact} />


    <footer>
      <p> Copyright © <span className="copy">Toute reproduction ou représentation, intégrale ou partielle, faite sans le consentement de l'auteur, serait illicite et constituerait une contrefaçon. </span></p>
  </footer>
    </div>
  )
}
export default App