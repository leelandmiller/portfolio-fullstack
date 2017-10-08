import React from 'react';
import classnames from 'classnames';
import './NavMain.css';
import Logo from '../Logo';

const NavMain = props => {

    let navClass = classnames({
        'navbar': true,
        'fixed-top': true,
        'navbar-dark': true,
        'navbar-custom': true,
        'nav-anim': !props.isTransparent
    });

    return (
        <nav className={navClass}>
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand brand-logo my-nav-brand d-flex justify-content-center" href="/">
                    <Logo />
                </a>
                <div className="navbar-nav my-navbar-nav d-flex flex-row justify-content-around">
                    {props.links.map(link => (
                        <a href={link.url} key={link.name} className="nav-item nav-link ">{link.name}</a>
                    ))}
                    {/* <a href="/" className="nav-item nav-link ">About</a>
                    <a href="#" className="nav-item nav-link ">Work</a>
                    <a href="#" className="nav-item nav-link">Contact</a> */}
                </div>
            </div>
        </nav>
    );
}

export default NavMain;
