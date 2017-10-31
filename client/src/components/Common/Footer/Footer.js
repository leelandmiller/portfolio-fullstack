import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <footer className="container-fluid bg-primary footer-height">
            <div className="row h-100 align-items-center">
                <div className="col">
                    <ul className="nav justify-content-center align-items-center align-self-center">
                        {props.links.map(link => (
                            <li key={link.name} className="nav-item"><a href={link.url} className="nav-link footer-link">{link.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row align-self-end bg-second align-items-center copyright">
                <div className="col">
                    <p className="text-white copyright-p text-center">&copy; Leeland Miller. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
