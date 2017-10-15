import axios from 'axios';

const projectAPI = {
    getAllProjects: function() {
        return axios.get('/api/allprojects');
    },
    addProject: function(newProject) {
        return axios.post('/api/newproject', { newProject });
    },
    editProject: function(projectId, projectEdits) {
        return axios.put(`/api/editproject/${projectId}`, { projectEdits });
    },
    deleteProject: function(projectId) {
        return axios.delete(`/api/deleteproject/${projectId}`);
    }
}

export default projectAPI;
