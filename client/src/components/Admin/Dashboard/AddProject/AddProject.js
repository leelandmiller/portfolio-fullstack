import React, {Component} from 'react';
import './AddProject.css';

import projectAPI from '../../../../utils/projectAPI';

class AddProject extends Component {

    state = {
        title: '',
        description: '',
        github: '',
        demo: '',
        filename: '',
        color: 'green',
        resMsg: ''
    }

    config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    addProject = event => {
        event.preventDefault();
        const image = document.querySelector('#add-image').files[0];

        let formData = new FormData();
        formData.append('image', image);
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('github', this.state.github);
        formData.append('demo', this.state.demo);
        formData.append('color', this.state.color);

        projectAPI.addProject(formData, this.config).then(results => {
            this.props.updateProjects();
            this.setResMsg(results.data.success);
            
            this.setState({title: '', description: '', github: '', demo: '', filename: ''});
        });
    }

    handleChange = event => {
        const val = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: val });
    }

    updateFileText = event => {
        const val = event.target.files[0].name;

        this.setState({filename: val});
    }

    setResMsg = msg => {
        let msgText;
        if (msg) {
            msgText = 'Success';
        } else {
            msgText = 'Failed';
        }
        this.setState({ resMsg: msgText });

        setTimeout(() => {
            this.setState({ resMsg: '' });
        }, 3000);
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
                                <input type='text' name='title' value={this.state.title} className="form-control" id="add-title" aria-describedby="titleHelp" placeholder="Project Title" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="add-description">Description</label>
                                <textarea className="form-control" id="add-description" placeholder='Description' rows='3' value={this.state.description} name='description' onChange={this.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor='add-github-link'>Github Link</label>
                                <input type='text' name='github' value={this.state.github} className="form-control" id="add-github-link" aria-describedby="githubHelp" placeholder="Github Link" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='add-demo-link'>Demo Link</label>
                                <input type='text' name='demo' value={this.state.demo} className="form-control" id="add-demo-link" aria-describedby="demoHelp" placeholder="Demo Link" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="add-color">Select Color</label>
                                <select name='color' value={this.state.color} onChange={this.handleChange} className="form-control" id="add-color">
                                    <option value='green'>Green</option>
                                    <option value='turquoise'>Turquoise</option>
                                    <option value='blue'>Blue</option>
                                    <option value='red'>Red</option>
                                    <option value='purple'>Purple</option>
                                    <option value='tan'>Tan</option>
                                    <option value='salmon'>Salmon</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <input type='file' name='image' id='add-image' className='inputfile' onChange={this.updateFileText}/>
                                <label htmlFor='add-image'>Choose an Image</label>
                                <div>
                                    <p>
                                        {this.state.filename && 'File:'}
                                        {this.state.filename}
                                    </p>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary add-submit-btn">Save</button>
                        </form>
                        <div className={this.state.resMsg === 'Success' ? 'resMsgSuccess' : 'resMsgFail'}>
                            {this.state.resMsg}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;
