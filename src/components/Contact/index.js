import React from 'react';


 function Contact () {
       

  return (
    <>
      <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className='bx bx-phone contact__icon'></i>

                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">+639774654463</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className='bx bx-message-dots contact__icon'></i>

                        <div>
                            <h3 className="contact__title">Email Me</h3>
                            <span className="contact__subtitle">jhyar171@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className='bx bx-current-location contact__icon'></i>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Cebu - Philippines</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label  className="contact__label">Name</label>
                            <input type="text" className="contact__input" name="user_name"/>
                        </div>
                        <div className="contact__content">
                            <label  className="contact__label">Email</label>
                            <input type="email" className="contact__input"  name="user_email"/>
                        </div>
                    </div>
                    <div className="contact__content">
                        <label className="contact__label">Message</label>
                       <textarea name="message" id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>
                    <div>
                        <a href='/' className="button button--flex">
                            Send message
                            <i className='bx bx-right-arrow-alt button__icon'></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Contact