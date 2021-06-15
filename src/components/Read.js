import React, { useEffect, useState, Fragment } from 'react';
import firebase from '../utils/firebaseConfig';
import UpdateDelete from './UpdateDelete';
import Navbar from './Navbar';
import '../style/read.scss'

const Read = () => {
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        const moviesDB = firebase.database().ref('films/films');

        moviesDB.on('value', (snapshot) => {
            let previousList = snapshot.val();
            let list = [];
            for (let id in previousList) {
                list.push({id, ...previousList[id]})
            }
            setFilmList(list);
        })
    }, []);

    return (
        <Fragment>
            <Navbar />
                <div className = "read">
                    <ul>{filmList &&
                        filmList.map((item, index)=> (
                            <UpdateDelete item={item} key = {index} />
                        // return <p>
                        //     <h5>{item.id}</h5>
                        // <h4>Titre du film :</h4> {item.titre} 
                        // <h4>Synopsis :</h4> {item.description}
                        // <h3>affiche</h3> {item.affiche} 
                        // <h4>Date de sortie :</h4> {item.date_de_sortie}</p>
                        ))
                        }
                        </ul>
                </div>
        </Fragment>
    );
};

export default Read;


                  //  filmList &&
                 //filmList.map((item, index) => {
                  //  <DeleteUpdate item={item} key={index} />