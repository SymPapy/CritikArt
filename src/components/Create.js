import React, { useState } from 'react';
import firebase from '../utils/firebaseConfig';
// import { UidContext } from './UidContext';

const Create = () => {
    const [affiche, setAffiche] = useState('');
    const [bande_annonce, setBande_annonce] = useState('');
    const [date_ajout, setAjout] = useState('');
    const [date_de_sortie, setSortie] = useState('');
    const [description, setDescription] = useState('');
    const [titre, setTitre] = useState('');

    // const uid = useContext(UidContext);

    const createNewMovie = () => {
        const moviesDB = firebase.database().ref("films")
        const movie = {
        affiche,
        bande_annonce,
        date_ajout,
        date_de_sortie,
        description,
        titre
        };

        moviesDB.push(movie);

        setAffiche('');
        setBande_annonce('');
        setAjout('');
        setSortie('');
        setDescription('');
        setTitre('');
    }



    return (
        <div className = "create">
            <h4>Déposer un film</h4>
            <div className = "form">
                <input
                type = "text"
                placeholder = "Titre du film"
                value = {titre}
                onChange = {(e) => setTitre(e.target.value)} /> 
                <textarea 
                placeholder = "Synopsis"
                value = {description}
                onChange = {(e) => setDescription(e.target.value)} 
                />
                <label for="sortie">Date de sortie : </label>
                <input
                type = "date"
                id = "sortie"
                value = {date_de_sortie}
                onChange = {(e) => setSortie(e.target.value)} />
                <label for="affiche" tabIndex="0">Affiche du film :</label>
                <input
                className = "input-file"
                type = "file"
                id = "affiche"
                 />
            <button onClick = {createNewMovie}>Envoi du nouveau film</button>
            </div>
        </div>
    );//on récupère ce qu'il ya dans l'évènement (e)->titre et on le passe dans setTitre
};

export default Create;