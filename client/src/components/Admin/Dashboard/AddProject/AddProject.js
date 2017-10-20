import React, { Component } from 'react';
import './AddProject.css';

import projectAPI from '../../../../utils/projectAPI';

class AddProject extends Component {

    state = {
        title: '',
        description: '',
        github: '',
        demo: '',
        filename: ''
    }

    config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    addProject = event => {
        event.preventDefault();
        const image = document.querySelector('#image').files[0];

        let formData = new FormData();
        formData.append('image', image);
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('github', this.state.github);
        formData.append('demo', this.state.demo);

        projectAPI.addProject(formData, this.config).then(results => {
            console.log(results);
        });
    }

    handleChange = event => {
        const val = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: val
        });
    }

    updateFileText = event => {
        const val = event.target.files[0].name;

        this.setState({
            filename: val
        });
    }

    render() {

        return (
            <div className='project-form'>
                <div className='row'>
                    <div className='col'>
                        <h3>Add Project</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <form id='addProjectForm' onSubmit={this.addProject} encType='multipart/form-data'>
                            <div className="form-group">
                                <label htmlFor='edit-title'>Title</label>
                                <input type='text' name='title' value={this.state.title} className="form-control" id="edit-title" aria-describedby="titleHelp" placeholder="Project Title" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="edit-description">Description</label>
                                <textarea className="form-control" id="edit-description" placeholder='Description' rows='3' value={this.state.description} name='description' onChange={this.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor='edit-github-link'>Github Link</label>
                                <input type='text' name='github' value={this.state.github} className="form-control" id="edit-github-link" aria-describedby="githubHelp" placeholder="Github Link" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='edit-demo-link'>Demo Link</label>
                                <input type='text' name='demo' value={this.state.demo} className="form-control" id="edit-demo-link" aria-describedby="demoHelp" placeholder="Demo Link" onChange={this.handleChange}/>
                            </div>
                            <div className='form-group'>
                                <input type='file' name='image' id='image' className='inputfile' onChange={this.updateFileText} />
                                <label htmlFor='image'>Choose an Image</label>
                                <div>
                                    <p>
                                        {this.state.filename && 'File:'} {this.state.filename}
                                    </p>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary edit-submit-btn">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;
