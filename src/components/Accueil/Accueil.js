import React from 'react'
import './Accueil.css'
import Logo from "../../assets/images/logo2.gif";
import NavBar from '../Navbar/Navbar';

const Accueil = ({element}) => {
    return (
        <main>
            <NavBar />
            <div>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <h1>Bienvenue sur CritikArt</h1>
                    </div>
                </section>
            </div>
        </main>
            

   )
}

export default Accueil