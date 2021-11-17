import axios from 'axios';

const api = axios.create({
    baseURL: 'https://project-gama-academy.herokuapp.com/'
})

export default api;