
import ActionType from './ActionType';
import axios from '../https';



export const fetchAllTopStories = () => async (dispatch) => {
    const { data } = await axios.get('/topstories.json')

    console.log(">> fetchTopStories:", data)

}

export const fetchAllNewStories = () => async (dispatch) => {

}

export const fetchAllBestStories = () => async (dispatch) => {

}

