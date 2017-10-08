import React, {Component} from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {


    render() {
        const heroStyle = {
            backgroundImage: 'url(assets/images/coding.jpg)',
        }

        return (
            <div id="jumbo" className="jumbotron jumbotron-fluid no-pad p-rel">
                <div id="hero-section" className="p-abs" style={heroStyle}></div>
                <div className="container p-abs my-name-container">
                    <h1 id="my-name" className="wow my-name text-white text-center hide animated slideInLeft">leeland</h1>
                    <h4 id="my-title" className="wow my-title text-white text-center hide animated slideInRight">full stack web developer</h4>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
