import React from 'react';
import './SectionBreaker.css';

const SectionBreaker = (props) => {
    return (
        <div className="section-breaker">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBreaker;
