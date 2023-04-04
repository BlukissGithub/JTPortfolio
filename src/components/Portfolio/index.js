import React, { useState, useEffect, useRef } from 'react';
import Blux from '../../assets/img/Blux.png'
import Airbots from '../../assets/img/Airbots.png'
import Jobhives from '../../assets/img/Jobhives.png'
import Cert from '../../assets/img/certification.png'
import Yellevate from '../../assets/img/Yellevate.png'
import YellevatePdf from '../../assets/pdf/Yellevate.pdf'
import mixitup from 'mixitup';

function Portfolio() {
  const [mixer, setMixer] = useState(null);
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (containerRef.current) {
      const mixerInstance = mixitup(containerRef.current, {
        selectors: {
          target: '.work__card'
        },
        animation: {
          duration: 300
        }
      });
      setMixer(mixerInstance);
    }
  }, []);

  const handleFilterClick = (event) => {
    const filter = event.target.dataset.filter;
    setActiveFilter(filter);
    mixer.filter(filter);
  };

  return (
    <>
      <section className="porfolio section" id="portfolio">
        <h2 className="section__title">My Portfolio</h2>
        <span className="section__subtitle">Recent Works</span>

        <div className="work__filters">
          <span className={`work__item ${activeFilter === "all" ? "active-work" : ""}`} data-filter="all" onClick={handleFilterClick}>
            All
          </span>
          <span className={`work__item ${activeFilter === ".web" ? "active-work" : ""}`} data-filter=".web" onClick={handleFilterClick}>
            Web
          </span>
          <span className={`work__item ${activeFilter === ".design" ? "active-work" : ""}`} data-filter=".design" onClick={handleFilterClick}>
            Design
          </span>
          <span className={`work__item ${activeFilter === ".certification" ? "active-work" : ""}`} data-filter=".certification" onClick={handleFilterClick}>
            Certification
          </span>
          <span className={`work__item ${activeFilter === ".others" ? "active-work" : ""}`} data-filter=".others" onClick={handleFilterClick}>
            Others
          </span>
        </div>
        <div className="work__container container grid" ref={containerRef}>
          <div className="work__card mix web">
            <img src={Blux} alt="" className="work__img" />

            <h3 className="work__title">Blux - Web development Services</h3>

            <a href="https://blukissgithub.github.io/BLUX/" target="_blank" rel="noopener noreferrer" className="work__button">
              View<i className='bx bx-caret-right work__icon'></i>
            </a>
          </div>
          <div className="work__card mix web">
            <img src={Airbots} alt="" className="work__img" />

            <h3 className="work__title">Airbots - "Drone" Website</h3>

            <a href="https://airbots-nine.vercel.app/" target={'_blank'} rel="noopener noreferrer" className="work__button">
              View<i className='bx bx-caret-right work__icon'></i>
            </a>
          </div>
          <div className="work__card mix web">
            <img src={Jobhives} alt="" className="work__img" />

            <h3 className="work__title">JobHives - "Job portal"</h3>

            <a href="https://github.com/BlukissGithub/JobHives-Webite" target={'_blank'} rel="noopener noreferrer"  className="work__button">
              View<i className='bx bx-caret-right work__icon'></i>
            </a>
          </div>

          <div className="work__card mix certification">
            <img src={Cert} alt="" className="work__img" />

            <h3 className="work__title">Refocus Data Analyst Course</h3>

            <a href="assets/pdf/RefocusCompletionCertificate_John Rico Tresvalles_83081621.pdf" className="work__button">
              View<i className='bx bx-caret-right work__icon'></i>
            </a>
          </div>
          <div className="work__card mix others">
            <img src={Yellevate} alt="" className="work__img" />

            <h3 className="work__title">Yellevate Dispute Analysis</h3>

            <a href={YellevatePdf} target="_blank" rel="noopener noreferrer" className="work__button">
              View<i className='bx bx-caret-right work__icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
