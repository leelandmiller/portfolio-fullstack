import React, { Component } from 'react';
import Jumbotron from '../../Common/Jumbotron';
import ProjectList from '../ProjectList';
import projectAPI from '../../../utils/projectAPI';

class PortfolioMain extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        projectAPI.getAllProjects().then(projectData => {
            this.setState({
                projects: projectData.data.reverse()
            });
        });
    }

    render() {
        return (
            <div>
                <Jumbotron bg={'url(assets/images/work_bg_2.jpeg)'} page={'my work'} />
                <ProjectList projects={this.state.projects} />
            </div>
        );
    }
}

export default PortfolioMain;
