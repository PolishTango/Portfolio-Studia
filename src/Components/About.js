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
                        <h1>Education:</h1>
                        <h4>09.2016 – 04.2020</h4>
                        <h3>Vocational School Complex No. 3 in Ostrołęka</h3>
                        <h4>09.2021 – 31.01.2025</h4>
                        <h3>WSB Merito University - Front End Developer</h3>
                        <div class="vertical-line0"></div>
                    </section>
                </div>
                <div className='Column'>
                    <section className="hidden">
                        <h1>Experience:</h1>
                        <h4>2020-2021</h4>
                        <h3>Implementation Specialist</h3>
                        <h4>2022-2023</h4>
                        <h3>QA Tester</h3>
                        <div class="vertical-line1"></div>

                    </section>
                </div>
                <div className='Column'>
                    <section className="hidden">
                        <h1>Certificates:</h1>
                        <h3>Skills in organizing work, designing, and taking responsibility for its results"</h3>
                        <h3>100-hour English Course - Upper Intermediate Level"</h3>
                        <h3>Certificate in "Creating applications for the Android system"</h3>
                        <div class="vertical-line2"></div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
