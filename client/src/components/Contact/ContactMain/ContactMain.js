import React from 'react';
import ContactForm from '../ContactForm';
import Jumbotron from '../../Common/Jumbotron';

const ContactMain = props => {
    return (
        <div>
            <Jumbotron bg={'url(assets/images/contact.jpg)'} page={'contact me'}/>
            <ContactForm/>
        </div>
    );
}

export default ContactMain;
