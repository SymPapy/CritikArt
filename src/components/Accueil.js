import React from 'react'
import '../style/Accueil.css'
import Logo from "../assets/images/logo2.gif";
import About from './About'

const Accueil = ({element}) => {
    return (

            <div>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <h1>Bienvenue sur CritikArt</h1>
                    </div>
                </section>
                <About />
            </div>
   )
}

export default Accueil