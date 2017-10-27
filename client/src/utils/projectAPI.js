import axios from 'axios';

const projectAPI = {
    getAllProjects: function() {
        return axios.get('/api/allprojects');
    },
    getProject: function(projectId) {
        return axios.get(`/api/project/${projectId}`);
    },
    addProject: function(project, config) {
        return axios.post('/api/newproject', project, config);
    },
    editProject: function(projectId, projectEdits) {
        return axios.put(`/api/editproject/${projectId}`, { projectEdits });
    },
    deleteProject: function(projectId) {
        return axios.delete(`/api/deleteproject/${projectId}`);
    }
}

export default projectAPI;
