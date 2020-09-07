//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0',
    timeout: 10000,
});


export default instance