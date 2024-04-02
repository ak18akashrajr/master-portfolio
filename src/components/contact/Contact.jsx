import React  from 'react';
import './contact.css';

const Contact = () => {
    
  return (
   <section className="contact section" id='contact'>
    <h2 className="section__title">Let's Connect</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Mail</h3>
                            <span className="contact__card-data">nandu272020@gmail.com</span>

                            <a href="mailto:nandu272020@gmail.com" target='_blank' rel='noreferrer' className="contact__button">Write me{" "}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        
                    </div>
                </div>

                
            </div>
   </section>
  )
}

export default Contact