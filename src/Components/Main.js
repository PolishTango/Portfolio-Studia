import React from 'react'
import './Main.css'
import Ja from './Photos/Ja.jpg'
const Main = () => {
    return (
        <div id="Main"  className='Main'>
            <div className='Container'>
                <img src={Ja} className='zdjecie' alt="To ja"/>
                <h1> Cześć Jestem Daniel <br></br><br></br>Witam cię na mojej stronie </h1>
                <h1>Daniel Fronczak</h1>
            </div>
        </div>
    )
}

export default Main
