import React from 'react';
import classnames from 'classnames';
import ReactTooltip from 'react-tooltip'

import './SkillIcon.css';

const SkillIcon = props => {

    const { skill, index } = props;

    const classList = classnames({
        'skill-ic': true,
        'mongo-ic': (skill.ic === 'mongodb-ic' ? true : false),
        'git-ic': (skill.ic === 'git-ic' ? true : false)
    });

    let tooltipDir = '';
    switch (index) {
        case 0:
            tooltipDir = 'top';
            break;
        case 1:
            tooltipDir = 'right';
            break;
        case 2:
            tooltipDir = 'right';
            break;
        case 3:
            tooltipDir = 'right';
            break;
        case 4:
            tooltipDir = 'left';
            break;
        case 5:
            tooltipDir = 'left';
            break;
        default:
            tooltipDir = 'top';
            break;
    }

    return (
        <a className="menu-item">
            <div className="ic-container" data-tip data-for={`${skill.ic}-tooltip`}>
                <img src={`assets/images/${skill.ic}.svg`} id={skill.ic} className={classList} alt={skill.name} />
                <img src={`assets/images/${skill.ic}-hover.svg`} id={`${skill.ic}-hover`} className="skill-ic fade-color" alt={skill.name} />
            </div>
            <ReactTooltip  className='tooltip' id={`${skill.ic}-tooltip`} place={tooltipDir} type='dark' effect='solid'>
                <span>{skill.name}</span>
            </ReactTooltip>
        </a>
    );
}

export default SkillIcon;
