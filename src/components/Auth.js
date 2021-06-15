import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Accueil from "./Accueil";
import About from './About';


const Auth = () => {
  //booléen pour savoir si la personne est connecté ou non => affichage de page suivante ou non
  const [isSignedIn, setSignedIn] = useState(false); //arrive sur la page de connexion par défaut false

  //création d'un objet
  const uiConfig = {
    signInFlow: "popup", //génère un popup quand on ouvre
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInsuccess: () => false,
      },
  };
//useEffect au chargement se lance automatiquement
useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => { //récupère user dans un paramètre
    setSignedIn(!!user); //On transforme user en booléen avec '!!'
    console.log(user);
  });
}, []); //crochet à la fin pour le callback

  return (
    <div className = "" style={{textAlign: 'center'}}>
      {isSignedIn ? ( //opérateur ternaire ? -> valeur si vrai : -> valeur si faux 
        <Accueil />
      ) : (
        <div>
          <h1 className="auth">Critikart authentification</h1>
          <About />
          <div className="login-page">
          <StyledFirebaseAuth //Stylise tous les boutons
            uiConfig = {uiConfig}
            firebaseAuth = { firebase.auth() } 
          />
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Auth;