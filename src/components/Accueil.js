import React from 'react'
import '../style/Accueil.css'
import Logo from "../assets/images/logo2.gif";
import Navbar from './Navbar';

const Accueil = ({element}) => {
    return (
        <main>
            <Navbar />
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