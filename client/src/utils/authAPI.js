import axios from 'axios';

const authAPI = {
    addUser: function(newUser) {
        return axios.post('/auth/signup', { newUser });
    },
    loginUser: function(email, password) {
        return axios.post('/auth/login', { email, password });
    },
    getCurrentUser: function() {
        return axios.get('/auth/currentuser');
    }
}

export default authAPI;
