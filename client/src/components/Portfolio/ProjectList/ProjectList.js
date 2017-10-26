import React from 'react';

import Project from '../Project';
import './ProjectList.css';

const ProjectList = props => {
    return (
        <div className='container-fluid'>
            {props.projects.map((project, i) => (
                <Project key={project._id} project={project} odd={i % 2} />
            ))}
        </div>
    );
}

export default ProjectList;
