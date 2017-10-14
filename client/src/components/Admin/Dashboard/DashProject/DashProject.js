import React, {Component} from 'react';
import './DashProject.css';

class DashProject extends Component {
    render() {
        return (
            <div className='dash-project'>
                <div className='card'>
                    <div onClick={() => {this.props.selectProject('dfaf')}} className='edit-ic text-right ion-edit'></div>
                    <div className="card-body project-card-body">
                        <h4 className="card-title">Project Title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Demo</a>
                        <a href="#" className="card-link">Github</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashProject;
