import React from 'react';
import classnames from 'classnames';
import './Project.css';

// TODO: setup classnames for columns, and project-info-container


const Project = props => {

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

    return (
        <div className='row green-gradient project-container'>
            <div className={imgColClasses}>
                <div className='project-img-container'>
                    <img src='assets/images/convertr_tablet.png' className='project-img' alt='Convertr App'/>
                </div>
            </div>
            <div className={infoColClasses}>
                <div className={projectInfo}>
                    <div>
                        <h1>Convertr</h1>
                        <p>
                            Convertr is a simple, fast, and easy to use conversion app used to convert many different measurements, ranging anywhere from temperature to weight to speed.
                        </p>
                        <div className='buttons'>
                            <a href='/' target='_blank' rel='noopener noreferrer' className='btn btn-outline-light demo-btn btn-margin'>Demo</a>
                            <a href='https://github.com/leelandmiller/convertr' target='_blank' rel='noopener noreferrer' className='btn btn-outline-dark btn-margin'>Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
