import React from 'react';
import './SkillsMain.css';

import SkillTree from '../SkillTree';
import SkillsHeading from '../SkillsHeading';

const SkillsMain = props => {

    const types = ['front', 'back'];

    return (
        <div>
            <section className="container about-section">
                <SkillsHeading />
                {types.map(type => (
                    <SkillTree
                        key={type}
                        type={type}
                        skills={type === 'front' ? props.frontEndSkills : props.backEndSkills}
                        menuChecked={type === 'front' ? props.menu1Check : props.menu2Check}
                    />
                ))}
                {/* <SkillTree type='front' skills={props.frontEndSkills} menuChecked={props.menu1Check} />
                <SkillTree type='back' skills={props.backEndSkills} menuChecked={props.menu2Check} /> */}
            </section>
        </div>
    )

}

export default SkillsMain;
