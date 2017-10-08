import React from 'react';
import classnames from 'classnames';
import SkillIcon from '../SkillIcon';

const SkillTree = props => {

    const rowClasses = classnames({
        'row': true,
        'skills-row': (props.type === 'front' ? true : false),
        'skills-ic-row': (props.type === 'back' ? true : false),
        'd-flex': (props.type === 'front' ? true : false),
        'align-items-center': (props.type === 'front' ? true : false)
    });

    const colClasses = classnames({
        'col-md-6': true,
        'd-flex': true,
        'justify-content-center': true,
        'skills-col': true,
        'order-md-2': (props.type === 'back' ? true : false)
    });

    const infoColClasses = classnames({
        'col-lg-4': true,
        'col-md-6': true,
        'ml-auto': true,
        'mr-auto': true,
        'order-md-1': (props.type === 'back' ? true : false),
        'skill-info': true,
        'd-flex': (props.type === 'back' ? true : false),
        'align-items-center': (props.type === 'back' ? true : false)
    });

    return (
        <div className={rowClasses}>
            <div className={colClasses}>
                <nav className="menu">
                    <input disabled type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open-1" checked={props.menuChecked} />
                    <label className="menu-open-button" htmlFor="menu-open-1">
                        <img className={`${props.type}end-code-ic`} src={`assets/images/${props.type}end-ic.svg`} alt="" />
                    </label>
                    {props.skills.map((skill, i) => (
                        <SkillIcon key={i} skill={skill} index={i} />
                    ))}
                </nav>
            </div>
            <div className={infoColClasses}>
                <div id={`${props.type}-end-info`}>
                    <h3 className="skill-heading text-second">{props.type === 'front' ? 'Front End' : 'Back End'}</h3>
                    <p>
                        {
                            props.type === 'front' ?
                            'From HTML to React, I have a wide array of front end skills under my belt, which allow me to efficiently design what you want and how you want.' :
                            'I have extensive experience with server-side programming with Node.js and many widely used database technologies, such as MySQL and MongoDB.'
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SkillTree;
