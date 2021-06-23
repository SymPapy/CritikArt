import React, { useState } from 'react';
import firebase from '../../utils/firebaseConfig';
import '../../style/read.scss';
import ReactStars from "react-rating-stars-component";
import {Button} from "react-bootstrap";
// import { FirebaseContext } from '../utils/index';

const UpdateDelete = ({ item }) => {


    const ratingChanged = (newRating) => {
        console.log(newRating)
    };


    const [update, setUpdate] = useState(false);
    // de base la MAJ est à false, rien ne se passe
    const [titreUpdate, setTitreUpdate] = useState(null);
    const [descriptionUpdate, setDescriptionUpdate] = useState(null);
    const [afficheUpdate, setAfficheUpdate] = useState(null);
    const [rateUpdate, setRateUpdate] = useState(null);

    const updateItem = () => {
        let film = firebase.database().ref("films/films").child(item.id);

        if (titreUpdate !== null) {
            film.update({
                titre: titreUpdate
            });
        }
        if (descriptionUpdate !== null) {
            film.update({
                description: descriptionUpdate
            });
        }
        if (afficheUpdate !== null) {
            film.update({
                affiche: afficheUpdate
            });
        }
        if (rateUpdate !== null){
            film.rate({
                rate: rateUpdate
            });
        }
        setUpdate(false);
    };

    const deleteItem = () => {
        let film = firebase.database().ref("films/films").child(item.id);

        film.remove();
    }

    return (
        <li>

            {update === false && (

                <div className="item-container">
                    <img src={item.affiche} />
                    <p>"{item.titre}"</p>
                    <h6>Synopsis -- {item.description}</h6>
                    <h4>date de sortie : {item.date_de_sortie}</h4>
                    <ReactStars 
                        count= {5}
                        onChange= {ratingChanged}
                        size= {24}
                        activeColor="#ffd700"
                        value={item.rate}
                    />
                    {(
                        <div className="buttons-container">
                            <Button variant="warning" onClick={() => setUpdate(!update)}>Mettre à jour</Button>
                            <Button variant="danger" onClick={deleteItem}>Supprimer</Button>

                        </div>
                    )}
                </div>
            )}

            {update && /* update= true */
                <div className="item-container-update">
                    <textarea
                        defaultValue={item.description}
                        onChange={(e) => setDescriptionUpdate(e.target.value)}
                    />
                    <input
                        type="text"
                        defaultValue={item.titre}
                        onChange={(e) => setTitreUpdate(e.target.value)}
                    />
                    <img 
                        defaultValue = { item.affiche }
                        onChange= {(e) => setAfficheUpdate(e.target.value)}
                    />
                    <button style={{borderRadius: "5px" }} onClick={updateItem}>Valider Update</button>
                </div>
            }

        </li>
    );
};

export default UpdateDelete;