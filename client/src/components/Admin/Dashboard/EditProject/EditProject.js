import React, { Component } from 'react';
import './EditProject.css';

class EditProject extends Component {
    state = {
        title: '',
        description: '',
        github: '',
        demo: ''
    }

    saveEdits = event => {
        //TODO: handle submit - call update method on API
    }

    handleChange = event => {
        const val = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: val
        });
    }

    render() {
        return (
            <div className='project-form'>
                <div className='row'>
                    <div className='col'>
                        <h3>Edit Project</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <form>
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
                            <button onClick={this.addProject} type="submit" className="btn btn-danger edit-submit-btn">DELETE</button>
                            <button onClick={this.saveEdits} type="submit" className="btn btn-primary edit-submit-btn">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProject;
