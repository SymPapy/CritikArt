import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebaseConfig';
import DeleteUpdate from './DeleteUpdate';

const Read = () => {
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        const moviesDB = firebase.database().ref('films');

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
        <div className = "read">
            <ul>
                {filmList &&
                filmList.map((item, index) => {
                return <p><h4>Titre du film :</h4> {item.titre} 
                <h4>Synopsis :</h4> {item.description} 
                <h4>Date de sortie :</h4> {item.date_de_sortie}</p>
                //<DeleteUpdate item={item} key={index} />
                })
            }
            </ul>
            
        </div>
    );
};

export default Read;


                  //  filmList &&
                 //filmList.map((item, index) => {
                  //  <DeleteUpdate item={item} key={index} />