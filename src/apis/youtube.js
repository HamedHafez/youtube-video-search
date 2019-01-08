import axios from 'axios';
const KEY = "AIzaSyCCkMHGsW0NKj3Xd91GJDPjD26YNRxX5ps";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});