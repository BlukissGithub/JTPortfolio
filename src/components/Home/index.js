import React from 'react'
import Hero from '../../assets/img/home.jpg'


function Home() {
  return (
    <>  
    <main className="main">
         <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/john-rico-t-b48601253/" target="_blank" rel="noopener noreferrer"
                            className="home__social-icon">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                        <a href="https://github.com/BlukissGithub" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                            <i className='bx bxl-github'></i>
                        </a>
                    </div>

                    <div className="home__img">
                        <img src={Hero} alt="Images of me" className="home__blob" ></img>
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">Hi, this is John Rico Tresvalles</h1>
                        <h3 className="home__subtitle">Frontend developer</h3>
                        <p className="home__description">What's up, I'm John Rico Tresvalles.
                             I'm a cat person, coffee lover, and newbie web developer. 
                            I'm passionate about learning more about coding and exploring 
                            the endless possibilities it offers.</p>
                        <a href="#contact" className="button button--flex">
                            Contact me<i className='bx bxs-right-arrow button__icon'></i>
                        </a>
                    </div>
                </div>

                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button">
                        <i className='bx bx-mouse home__scroll-mouse'></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className='bx bx-down-arrow-alt home__scroll-arrow'></i>
                    </a>
                </div>
            </div>
        </section>
        </main>
    </>
  )
}

export default Home