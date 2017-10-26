import React from 'react';
import './ProfilePic.css';

const ProfilePic = props => {
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <img src="assets/images/leeland_bw.jpg" className="my-profile-img" alt="profile" />
            </div>
        </div>
    )
}

export default ProfilePic;
