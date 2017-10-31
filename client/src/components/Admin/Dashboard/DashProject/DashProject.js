import React from 'react';
import './DashProject.css';

const DashProject = (props) => {
    return (
        <div className='dash-project'>
            <div className='card'>
                <div onClick={() => {props.selectProject(props.project._id)}} className='edit-ic text-right ion-edit'></div>
                <div className="card-body project-card-body">
                    <h4 className="card-title">{props.project.title}</h4>
                    {/* <p className="card-text">{props.project.description}</p> */}
                    <a href={props.project.demo_url} className="card-link">Demo</a>
                    <a href={props.project.github_url} className="card-link">Github</a>
                </div>
            </div>
        </div>
    );
}

export default DashProject;
