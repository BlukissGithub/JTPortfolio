import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
                <div>
                    <h1 className="footer__title">JT</h1>
                    <span className="footer__subtitle">Frontend developer</span>
                </div>

                <ul className="footer__links">
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#certification" className="footer__link">certification</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contactme</a>
                    </li>
                </ul>

                <div className="footer__socials">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__social">
                        <i className='bx bxl-facebook'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/john-rico-t-b48601253/" target="_blank" rel="noopener noreferrer"
                        className="footer__social">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="https://github.com/BlukissGithub" target="_blank" rel="noopener noreferrer" className="footer__social">
                        <i className='bx bxl-github'></i>
                    </a>
                </div>
            </div>
            <p className="footer__copy">&#169; JT All rights reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer