import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => {

    const portfolioJumbo = {
        backgroundImage: props.bg,
    }

    return(
        <div className="jumbotron jumbotron-fluid jumbo no-pad p-rel">
            <div className="hero-section p-abs" style={portfolioJumbo}></div>
            <div className="container p-abs my-name-container">
                <h1 className="wow my-name text-white text-center hide animated slideInLeft">{props.page}</h1>
                {props.page === 'leeland' &&
                    <h4 id="my-title" className="wow my-title text-white text-center hide animated slideInRight">full stack web developer</h4>
                }
            </div>
        </div>
    );
}

export default Jumbotron;
