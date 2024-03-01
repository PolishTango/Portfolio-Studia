import React from 'react'
import './Portfollio.css'
import Animacja2 from './Animacja2'

const Portfollio = () => {
    return (
        <div id="Portfollio" className='test'>
        <div className='Portfollio'>
                 <Animacja2 />
             <section className="hidden2">          
                <h1 className='napis'>My greatest passion lies in the art of film editing </h1>
            </section>
            <div className='Container'>
                <div className='Column'>    <section className="hidden2">
                <iframe className='filmik' src="https://www.youtube.com/embed/m4CYOzaIU2s" title="Portfolio Final Version" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </section>
                </div>
            </div>
            <section className="hidden2">  
            <h1 className='napis'>Hope You like it :) </h1>
            </section>
        </div>
         </div>
    )
}

export default Portfollio