import React from 'react';

import Project from '../Project';
import './ProjectList.css';

const ProjectList = props => {
    return (
        <div className='container-fluid'>
            <Project odd={false} />
        </div>
    );
}

export default ProjectList;
