import React from 'react'
import ProjectImg from '../../assets/img/Project.png'

function Project() {
  return (
    <>
          <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new project</h2>
                        <p className="project__description">Don't be shy hit me up!</p>

                        <a href="#contact" className="button button--flex button--white">
                            Contact me <i className='bx bxs-message-square-dots project__icon button__icon'></i>
                        </a>
                    </div>

                    <img src={ProjectImg} alt="" className="project__img"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Project