import React from 'react';
import classnames from 'classnames';
import './Project.css';

const Project = props => {

    const project = props.project;

    const imgColClasses = classnames({
        'col-md-6': true,
        'order-1': !props.odd,
        'order-2': props.odd,
    });

    const infoColClasses = classnames({
        'col-md-6': true,
        'order-1': props.odd,
        'order-2': !props.odd,
    });

    const projectInfo = classnames({
        'project-info-container': true,
        'text-right': !props.odd,
        'text-left': props.odd
    });

    const projectContainer = classnames({
        'row': true,
        'project-container': true,
        [`${project.color}-gradient`]: true,
    });

    const breakline = description => {
        let splitText = description.replace(/\n/g, '<br/>');
        let br = React.createElement('br');
        let regex = /(<br\/>)/g;


        return splitText.split(regex).map((line, index) => {
            return line.match(regex) ? <br key={`key_${index}`} /> : line;
        });
    }

    return (
        <div className={projectContainer}>
            <div className={imgColClasses}>
                <div className='project-img-container'>
                    <img src={project.photo_url} className='project-img' alt={project.title}/>
                </div>
            </div>
            <div className={infoColClasses}>
                <div className={projectInfo}>
                    <div>
                        <h1>{project.title}</h1>
                        <p>{breakline(project.description)}</p>
                        <div className='buttons'>
                            <a href={project.demo_url} target='_blank' rel='noopener noreferrer' className='btn btn-outline-light demo-btn btn-margin'>Demo</a>
                            <a href={project.github_url} target='_blank' rel='noopener noreferrer' className='btn btn-outline-dark btn-margin'>Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
