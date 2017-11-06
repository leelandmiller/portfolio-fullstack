import React from 'react';
import './Availability.css';

const Availability = props => {
    return (
        <section className="container about-section">
            <div className="row">
                <div className="col">
                    <h2 className="text-center text-primary">I'm Available.</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                    <p id="contact-me-p" className="text-center">
                        I am available for freelance work, contract work, and full-time employment. If you like what you see and want to hire me, shoot me an email!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col  d-flex justify-content-center">
                    <a href='/contact' id='message-me-btn' className="btn btn-primary">
                        <span className="ion-ios-email"></span> Message Me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Availability;
