import React, { useState } from 'react';
import firebase from '../utils/firebaseConfig';
// import { UidContext } from './UidContext';

// const uid = useContext(UidContext);

// const userCheck = () => {
//     if (item.uid === uid) {
//         return true;
//     } else {
//         return false;
//     }
// }
// userCheck();

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

                    {/* {userCheck() && (
                        <div className="buttons-container">
                            <button onClick={() => setUpdate(!update)}>Update</button>
                            <button onClick={deleteItem}>Delete</button>
                        </div>
                    )} */}
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
                    <button onClick={updateItem}>Valider Update</button>
                </div>

            }

        </li>
    );
};

export default UpdateDelete;