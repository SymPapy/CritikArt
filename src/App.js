import React from 'react';
import Contact from './components/Contact.js';
import Accueil from './components/Accueil.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth';
import Create from './components/Create';
import Read from './components/Read';
import ErrorPage from './components/ErrorPage';
import './App.css';

// Switch : Permet de ne pas afficher la totalité des pages en une
// Route : Permet de naviguer entre les pages
// Router : englobe les instances

function App() {
  
    return (
        <Router className ="welcome">
          
          <Switch>
              <Route exact  path="/" component={ Auth } />
              <Route  path="/accueil" component={ Accueil } />
              <Route  path="/contact" component={ Contact } />
              <Route  path="/create" component={ Create } />
              <Route  path="/read" component={ Read } />
              <Route  component={ ErrorPage } />

          </Switch>

          <Footer />
        </Router>
  )
}
export default App