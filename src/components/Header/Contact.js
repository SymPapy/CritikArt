import React from 'react'
import './Contact.css'
import Logo from "../../assets/images/logo1.gif";

const Contact = ({element}) => {
    return (
            <main>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <p>Even if you scroll, i will stick with you</p>
                    </div>
                </section>
            </main>
    )
}

export default Contact