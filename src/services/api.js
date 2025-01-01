import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL || 'https://api.devcenter.vuasoft.com/swagger/api',
});

export default api;
