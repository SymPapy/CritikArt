import React, { Fragment, useState } from 'react';
import firebase from '../../utils/firebaseConfig';
// import { UidContext } from './UidContext';
import Navbar from '../Navbar/Navbar';
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReactStars from 'react-rating-stars-component';
import '../../style/Contact.css';

const Create = () => {

    
    const [affiche, setAffiche] = useState('');
    const [bande_annonce, setBande_annonce] = useState('');
    const [date_ajout, setAjout] = useState('');
    const [date_de_sortie, setSortie] = useState('');
    const [description, setDescription] = useState('');
    const [titre, setTitre] = useState('');
    const [rate, setRate] = useState('');
    
    // const uid = useContext(UidContext);
    
    const createNewMovie = () => {
        const moviesDB = firebase.database().ref("films/films")
        const movie = {
            affiche,
            bande_annonce,
            date_ajout,
            date_de_sortie,
            description,
            titre,
            rate
        };
        console.log("movie", movie);
        
        moviesDB.push(movie);
        
        setAffiche('');
        setBande_annonce('');
        setAjout('');
        setSortie('');
        setDescription('');
        setTitre('');
        setRate('');
    }
    const ratingChanged = (newRating) => {
        console.log(newRating)
    };
    
    return (
        <Fragment>
            <Navbar />
            <h2 className="addFilms">Déposer un film</h2>
            
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
                    <ReactStars 
                        count= {5}
                        onChange= {(newRating) => { setRate(newRating) }}
                        size= {24}
                        activeColor="#ffd700"
                        value= {rate}
                    />
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
                <Form>
                    <Row>
                        <Col>
                        <Form.Control
                            placeholder = "UrL Affiche du film"
                            value = {affiche}
                            onChange = {(e) => setAffiche(e.target.value)}
                        />
                        </Col>
                        <Col>
                        <Form.Control 
                            className=""
                            required
                            type="date"
                            value = {date_de_sortie}
                            onChange = {(e) => setSortie(e.target.value)}
                        />
                        </Col>
                    </Row>
                </Form>
                <br></br>
                <Button onClick = { createNewMovie } 
                        variant="danger"
                        className='btn'>
                    Envoye du nouveau film
                </Button>
            </Form>
            <br></br>
        </div>
        </Fragment>
    );//on récupère ce qu'il ya dans l'évènement (e)->titre et on le passe dans setTitre
};

export default Create;