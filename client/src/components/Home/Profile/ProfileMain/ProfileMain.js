import React from 'react';
import ProfilePic from '../ProfilePic';
import ProfileSummary from '../ProfileSummary';
import './ProfileMain.css';

const ProfileMain = props => {
    return (
        <section className="container profile-section">
            {/* Profile Image Component */}
            <ProfilePic />
            {/* Profile Summary Component */}
            <ProfileSummary />
        </section>
    );
}

export default ProfileMain;
