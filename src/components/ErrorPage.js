import React from 'react'
import Logo from "../assets/images/logo1.gif"

const ErrorPage = () => {
    return (
        <div>
            <div className="welcome">
                <h1 >ERREUR 404 ! <br></br><br></br>Oups, cette page n'existe pas!</h1><br></br>
                <img className="welcome--logo" src={Logo} alt="welcome--logo" />
            </div>
        </div>

    )
}

export default ErrorPage