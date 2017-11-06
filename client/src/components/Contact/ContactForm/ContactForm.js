import React from 'react';
import './ContactForm.css';

const ContactForm = props => {
    return (
        <section className='container contact-section'>
            <div className='row'>
                <div className='col-md-6'>
                    
                </div>
                <div className='col-md-6'>
                    <form>
                        <div className="form-group">
                            <label htmlFor='contact-name'>Name</label>
                            <input type="text" className="form-control form-control-lg" id='contact-name' aria-describedby='nameHelp' placeholder='Name here'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor='contact-email'>Email</label>
                            <input type='email' className='form-control form-control-lg' id='contact-email' placeholder='Email'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Send Email</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
