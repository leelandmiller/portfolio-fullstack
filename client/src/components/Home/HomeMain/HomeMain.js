import React from 'react';
import Jumbotron from '../Jumbotron';
import Divider from '../../Common/Divider';
import ProfileMain from '../Profile/ProfileMain';
import SectionBreaker from '../../Common/SectionBreaker';
import SkillsMain from '../Skills/SkillsMain';
import Availability from '../Availability';

const HomeMain = (props) => {

    let frontEndSkills = [
        { name: 'HTML5', ic: 'html-ic', },
        { name: 'CSS3', ic: 'css-ic', },
        { name: 'jQuery', ic: 'jquery-ic', },
        { name: 'Javascript', ic: 'js-ic', },
        { name: 'React.js', ic: 'react-ic', },
        { name: 'Handlebars.js', ic: 'handlebars-ic', },
    ];

    let backEndSkills = [
        { name: 'Node.js', ic: 'nodejs-ic', },
        { name: 'Express.js', ic: 'express-ic', },
        { name: 'MongoDB', ic: 'mongodb-ic', },
        { name: 'MySQL', ic: 'mysql-ic', },
        { name: 'Mocha.js', ic: 'mochajs-ic', },
        { name: 'Git', ic: 'git-ic', },
    ];

    return (
        <div>
            <Jumbotron />
            <Divider />
            <ProfileMain/>
            <SectionBreaker />
            <SkillsMain
                frontEndSkills={frontEndSkills}
                backEndSkills={backEndSkills}
                menu1Check={props.menu1Check}
                menu2Check={props.menu2Check} />
            <SectionBreaker />
            <Availability />
        </div>
    );
}

export default HomeMain;
