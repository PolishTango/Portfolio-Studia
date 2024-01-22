import React from 'react';
import './About.css';
import Animacja from './Animacja';

const About = () => {
    return (
        <div className='About'>
                    <Animacja />
            <div className='Container'>
                <div className='Column'>
                    <section className="hidden">
                        <h1>Wykształcenie:</h1>
                        <h4>09.2016 – 04.2020</h4>
                        <h3>Zespół Szkół Zawodowych nr 3 Ostrołęka</h3>
                        <h4>09.2021 – 31.01.2025</h4>
                        <h3>Uczelnia WSB Merito - Front End Developer</h3>
                        <div class="vertical-line0"></div>
                    </section>
                </div>
                <div className='Column'>
                    <section className="hidden">
                        <h1>Doświadczenie:</h1>
                        <h4>2020-2021</h4>
                        <h3>Specjalista ds.realizacji</h3>
                        <h4>2022-2023</h4>
                        <h3>QA Tester</h3>
                        <div class="vertical-line1"></div>

                    </section>
                </div>
                <div className='Column'>
                    <section className="hidden">
                        <h1>Szkolenia:</h1>
                        <h3>Certyfikat "Umiejętności organizowania pracy, projektowania i przyjmowania odpowiedzialności za jej wyniki"</h3>
                        <h3>Kurs angielskiego -100h poziom Średniozaawansowany wyższy"</h3>
                        <h3>Certyfikat "tworzenie aplikacji dla systemu android"</h3>
                        <div class="vertical-line2"></div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
