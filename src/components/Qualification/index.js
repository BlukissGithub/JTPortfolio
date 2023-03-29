import React, { useState } from 'react';

function Qualification() {
  const [activeTab, setActiveTab] = useState('education');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''
                }`}
              onClick={() => handleClick('education')}
            >
              <i className="bx bxs-graduation qualification__icon"></i>
              Education
            </div>
            <div
              className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''
                }`}
              onClick={() => handleClick('work')}
            >
              <i className="bx bx-briefcase qualification__icon"></i>
              Work
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''
                }`}
              data-content
              id="education"
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Full Stack Web Developer</h3>
                  <span className="qualification__subtitle">Kodego</span>
                  <div className="qualification__calendar">
                    <i className="bx bx-calendar"></i>
                    2022 - 2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Data Analyst</h3>
                  <span className="qualification__subtitle">Refocus Bootcamp</span>
                  <div className="qualification__calendar">
                    <i className="bx bx-calendar"></i>
                    2022 - 2023
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Angono National High School</h3>
                  <span className="qualification__subtitle">Angono - Rizal</span>
                  <div className="qualification__calendar">
                    <i className="bx bx-calendar"></i>
                    2010 - 2014
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
            <div
              className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''
                }`}
              data-content
              id="work"
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Freelance Graphic Designer</h3>
                  <span className="qualification__subtitle">Kapital DAO</span>
                  <div className="qualification__calendar">
                    <i className="bx bx-calendar"></i>
                    2021 - 2022
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Sales Representative</h3>
                  <span className="qualification__subtitle">Abragons medical Supply</span>
                  <div className="qualification__calendar">
                    <i className="bx bx-calendar"></i>
                    2014 - 2015
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Qualification;