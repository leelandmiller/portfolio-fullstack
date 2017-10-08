import React from 'react';

const SkillsHeading = (props) => {
    return (
        <div>
            <h2 id="skills-h1" className="text-center text-primary">What I'm Capable Of.</h2>
            <div className="row skills-ic-row">
                <div className="col d-flex justify-content-center">
                    <img src="assets/images/coding-skills.svg" alt="coding icon" />
                </div>
            </div>
        </div>
    );
}

export default SkillsHeading;
