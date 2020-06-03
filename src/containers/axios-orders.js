import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-my-burger-d4d1e.firebaseio.com/'
});

export default instance;