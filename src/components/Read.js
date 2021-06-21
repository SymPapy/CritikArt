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
                        ))
                        }
                        </ul>
                </div>
        </Fragment>
    );
};

export default Read;