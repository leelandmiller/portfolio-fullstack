import React from 'react';

const ProfileSummary = props => {
    return (
        <div className="row justify-content-center summary-row">
            <div className="col-lg-6">
                <h2 className="text-center text-primary">Hello.</h2>
                <p id="about-me-p" className="text-center">
                    My name's Leeland. <br/>
                    I'm a full stack web developer with the skills & knowledge necessary to create user-friendly, interactive, & fun web applications. I'm a quick learner, hard worker, & truly dedicated to my craft. The SF Bay Area is my current home base.
                </p>
            </div>
        </div>
    );
}

export default ProfileSummary;
