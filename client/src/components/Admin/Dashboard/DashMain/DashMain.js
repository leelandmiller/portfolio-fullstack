import React, { Component } from 'react';
import DashProjectList from '../DashProjectList';
import EditProject from '../EditProject';
import AddProject from '../AddProject';
import projectAPI from '../../../../utils/projectAPI';
import './DashMain.css';

class DashMain extends Component {

    state = {
        email: '',
        password: '',
        activeTab: 'edit',
        selectedProject: '',
        projects: []
    }

    componentDidMount() {
        this.getProjects();
    }

    handleChange = event => {
        const val = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: val
        });
    }

    getProjects = () => {
        projectAPI.getAllProjects().then(projectData => {
            console.log(projectData);

            this.setState({
                projects: projectData.data
            });
        });
    }

    selectProject = (projectId) => {
        this.setState({
            selectedProject: projectId
        });
    }

    showEditProject = () => {
        if (this.state.selectedProject) {
            return (
                <EditProject project={this.state.selectedProject} />
            );
        } else {
            return (
                <AddProject />
            );
        }
    }

    render() {
        return(
            <div className='admin-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <DashProjectList projects={this.state.projects} selectProject={this.selectProject} />
                        </div>
                        <div className='col-lg-8 col-md-6'>
                            {this.showEditProject()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashMain;
