import React from 'react'
import './Accueil.css'
import Logo from "../../assets/images/logo1.gif";
import About from './About'

const Accueil = ({element}) => {
    return (

            <div>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <p>Bienvenu sur CritikArt</p>
                    </div>
                </section>
                <About />
            </div>
   )
}

export default Accueil