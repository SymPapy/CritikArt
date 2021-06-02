import React from 'react';
import Navbar from "./components/Header/Navbar"
import Contact from './components/Header/Contact.js';
import Accueil from './components/Header/Accueil.js';
import {Route} from 'react-router-dom';

function App() {
    return (
    <div className="container">
      <Navbar />
      <Route exact path="/accueil" component={Accueil} />
      <Route exact path="/contact" component={Contact} />



    </div>
  )
}
export default App