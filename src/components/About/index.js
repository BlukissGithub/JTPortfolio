import React from 'react'
import AboutImage from '../../assets/img/about.png'
import Pdf from '../../assets/pdf/JohnRicoTresvalles.pdf'

function About() {
  return (
        
    <div className='main' >
       <section className="about section" id="about">
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My introduction</span>

                <div className="about__container container grid">
                    <img src={AboutImage} alt="" className="about__img"/>

                    <div className="about__data">
                        <p className="about__description">I'm John, a Frontend developer with a background in freelance graphic design.
                            <br/> I create visually stunning websites and user-friendly websites.
                              In my free time, <br/> I enjoy exploring and trying new things,
                               from learning new skills to help me improve my web development skills</p>


                        <div className="about__info">
                            <div>
                                <span className="about__info-title">01+</span>
                                <span className="about__info-name">Year <br/> experience</span>
                            </div>
                            <div>
                                <span className="about__info-title">3+</span>
                                <span className="about__info-name">Website <br/> Design</span>
                            </div>
                            <div>
                                <span className="about__info-title">3+</span>
                                <span className="about__info-name">Completed <br/> projects</span>
                            </div>

                        </div>

                        <div className="about__buttons">
                            <a href={Pdf} target="_blank" rel="noopener noreferrer" className="button button--flex">
                                Download cv <i className='bx bx-download button__icon'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}

export default About