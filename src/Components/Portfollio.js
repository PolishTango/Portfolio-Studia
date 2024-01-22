import React from 'react'
import './Portfollio.css'
import Animacja2 from './Animacja2'

const Portfollio = () => {
    return (
        <div id="Portfollio" className='test'>
        <div className='Portfollio'>
                 <Animacja2 />
             <section className="hidden2">          
                <h1 className='napis'>Moim hobby jest montaż filmów </h1>
            </section>
            <div className='Container'>
                <div className='Column'>    <section className="hidden2">
                <iframe width="500" height="500" className='filmik' src="https://www.youtube.com/embed/ZaUm-mSbS6c" title="Coldzera vs Liquid (Cs:Go Montage)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
                </div>
                <div className='Column'> <section className="hidden2">
                <iframe width="500" height="500" className='filmik2' src="https://www.youtube.com/embed/g3PaUbSyXX8" title="2022 10 19 23 51 07 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
                </div>
                <div className='Column'> <section className="hidden2">
                <iframe width="500" height="500" className='filmik3' src="https://www.youtube.com/embed/IuPkujRDyBQ" title="Minecraft KiK zapowiedz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
                </div>
            </div>
            <section className="hidden2">  
            <h1 className='napis'>Oto kilka przykładów mojej pracy</h1>
            </section>
        </div>
         </div>
    )
}

export default Portfollio