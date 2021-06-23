import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from './components/Contact/ContactUs.js';
import Accueil from './components/Accueil/Accueil';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Create from './components/AddFilm/Create';
import Read from './components/ReadFilm/Read';
import ErrorPage from './components/Error404/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
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
              <Route  path="/read" component={ Read } />
              <Route  path="/create" component={ Create } />
              <Route  path="/contactUs" component={ ContactUs } />
              <Route  component={ ErrorPage } />

          </Switch>

          <Footer />
        </Router>
  )
}
export default App