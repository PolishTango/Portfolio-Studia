import React from 'react'
import './Main.css'
import Ja from './Photos/Ja.jpg'

const Main = () => {
    return (
        <div id="Main"  className='Main'>
            <div className='Container'>
                <img src={Ja} className='zdjecie' alt="To ja"/>
                <h1> Hi there I'm Daniel <br></br><br></br>Welcome on my Portfolio Page </h1>
            </div>
        </div>
    )
}

export default Main
