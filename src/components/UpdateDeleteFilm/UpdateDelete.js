import React, { useState } from 'react';
import firebase from '../../utils/firebaseConfig';
import '../../style/read.scss';
// import { FirebaseContext } from '../utils/index';

const UpdateDelete = ({ item }) => {
    const [update, setUpdate] = useState(false);
    // de base la MAJ est à false, rien ne se passe
    const [titreUpdate, setTitreUpdate] = useState(null);
    const [descriptionUpdate, setDescriptionUpdate] = useState(null);


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
                    <p>"{item.titre}"</p>
                    <h6>Synopsis -- {item.description}</h6>
                    <h4>date de sortie : {item.date_de_sortie}</h4>
                    {(
                        <div className="buttons-container">
                            <button style={{borderRadius: "5px" }}  onClick={() => setUpdate(!update)}>Mettre à jour</button>
                            <button style={{borderRadius: "5px" }}  onClick={deleteItem}>Supprimer</button>
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
                    <button style={{borderRadius: "5px" }} onClick={updateItem}>Valider Update</button>
                </div>

            }

        </li>
    );
};

export default UpdateDelete;