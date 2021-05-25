import axios from 'axios';

const KEY = "AIzaSyBeUWLCcB3hkDV6jSDdNeO6SRm582Hx7N8";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});