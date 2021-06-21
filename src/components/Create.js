import React, { Fragment, useState } from 'react';
import firebase from '../utils/firebaseConfig';
// import { UidContext } from './UidContext';
import Navbar from './Navbar';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import '../style/Contact.css';

const Create = () => {
    const [affiche, setAffiche] = useState('');
    const [bande_annonce, setBande_annonce] = useState('');
    const [date_ajout, setAjout] = useState('');
    const [date_de_sortie, setSortie] = useState('');
    const [description, setDescription] = useState('');
    const [titre, setTitre] = useState('');

    // const uid = useContext(UidContext);

    const createNewMovie = () => {
        const moviesDB = firebase.database().ref("films/films")
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
        <Fragment>
            <Navbar />
            <h2>Déposer un film</h2>
            
        <div className="container-fluid">
            <Form className = "welcome-create">
            <Form.Text className="text-muted1">
                Vous avez la possibilité de participer au développement de CritikArt, tout simplement
                en y ajoutant des films 😁.<br></br>
                Cependant, et il en va de soi, il est interdit ❌ d'y inscrir des films à caractère sexuel ! Un contrôle régulier est mis en place /!\
            </Form.Text>
            <br></br><br></br>
                <Form.Group controlId="exampleForm.ControlInput1" className="titleFilm">
                    <Form.Control
                        placeholder = "Titre du film"
                        value = {titre}
                        onChange = {(e) => setTitre(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="exampleForm.ControlTextarea1" className="textarea">
                        <Form.Control 
                            as="textarea" 
                            rows={2} 
                            cols="80" 
                            placeholder="Ecrivez la synopsis ici" 
                            style={{ height: '150px' }}
                            value = {description}
                            onChange = {(e) => setDescription(e.target.value)} 
                            />
                </Form.Group>
                <br></br>
                <label for="sortie">Date de sortie : </label>
                    <input
                    className="date"
                    type = "date"
                    id = "sortie"
                    value = {date_de_sortie}
                    onChange = {(e) => setSortie(e.target.value)} 
                    />
                <br></br><br></br>
                <Button onClick = { createNewMovie } 
                        variant="danger"
                        className='btn'>
                    Envoyer du nouveau film
                </Button>
            </Form>
            <br></br>
        </div>
        </Fragment>
    );//on récupère ce qu'il ya dans l'évènement (e)->titre et on le passe dans setTitre
};

export default Create;