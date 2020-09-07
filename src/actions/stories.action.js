import ActionType from './ActionType';
import axios from '../https';
import { MenuState } from './menuState';


export const fetchStories = (pageNum) => async (dispatch, getState) => {
    const { activeMenu: { active } } = getState()
    console.log(`>> fetchStories: ${pageNum}: `, active)
    switch (active) {
        case MenuState.newStories:
            dispatch(fetchNewStories(pageNum))
            break;
        case MenuState.bestStories:
            dispatch(fetchBestStories(pageNum))
            break;
        case MenuState.topStories:
            dispatch(fetchTopStories(pageNum))
            break;
        default:
            dispatch(fetchNewStories(pageNum))
            break;
    }
}




/*********************************/
/*** GET Available Stories Ids ***/
/*********************************/

export const fetchAllTopStories = () => async (dispatch) => {
    const { data } = await axios.get('/topstories.json')
    dispatch({ type: ActionType.TopStoriesIds, payload: data })
}

export const fetchAllNewStories = () => async (dispatch) => {
    const { data } = await axios.get('/newstories.json')
    dispatch({ type: ActionType.NewStoriesIds, payload: data })
}

export const fetchAllBestStories = () => async (dispatch) => {
    const { data } = await axios.get('/beststories.json')
    dispatch({ type: ActionType.BestStoriesIds, payload: data })
}




/***************************/
/****** GET Story Data *****/
/***************************/

export const fetchTopStories = (pageNum) => async (dispatch, getState) => {
    const first = Math.abs(pageNum - 1) * 20 //  0  20 40
    const last = first + 20 //  20  40  60
    const { topStoriesIds } = getState()
    console.log(">> action >> state:", getState())
    const arrIds = topStoriesIds.slice(first, last);
    arrIds.forEach(id => {
        dispatch(fetchSingleStory(id, ActionType.TopStories, pageNum))
    })
}

export const fetchNewStories = (pageNum) => async (dispatch, getState) => {
    const first = Math.abs(pageNum - 1) * 20
    const last = first + 20
    const { newStoriesIds } = getState()
    const arrIds = newStoriesIds.slice(first, last);
    arrIds.forEach(id => {
        dispatch(fetchSingleStory(id, ActionType.NewStories, pageNum))
    })
}


export const fetchBestStories = (pageNum) => async (dispatch, getState) => {
    const first = Math.abs(pageNum - 1) * 20
    const last = first + 20
    const { bestStoriesIds } = getState()
    const arrIds = bestStoriesIds.slice(first, last);
    arrIds.forEach(id => {
        dispatch(fetchSingleStory(id, ActionType.BestStories, pageNum))
    })
}



const fetchSingleStory = (storyId, actionType, pageNum) => async (dispatch) => {
    const { data } = await axios.get(`/item/${storyId}.json`)
    console.log("fetchSingleStory:", data)
    dispatch({ type: actionType, payload: data, page: pageNum })
}

