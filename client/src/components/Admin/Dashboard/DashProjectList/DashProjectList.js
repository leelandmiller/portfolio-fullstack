import React, { Component } from 'react';
import DashProject from '../DashProject';

class DashProjectList extends Component {
    // PROPS: projects from db
    render() {
        return (
            <div className='project-list'>
                <div className='row'>
                    <div className='col'>
                        <h3>Projects</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-sm-6 col-xs-6'>
                        {/*Map thru Project will go here*/}
                        <DashProject selectProject={this.props.selectProject} />
                    </div>
                    <div className='col-md-12 col-sm-6 col-xs-6'>
                        {/*Map thru Project will go here*/}
                        <DashProject selectProject={this.props.selectProject} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashProjectList;
