import ActionType from './ActionType';
import axios from '../https';



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


export const fetchTopStories = (pageNum) => async (dispatch, getState) => {
    const first = Math.abs(pageNum - 1) * 20 //  0  20 40
    const last = first + 20 //  20  40  60
    // await fetchAllTopStories()
    const { topStoriesIds } = getState()
    console.log(">> action >> state:", getState())
    const arrIds = topStoriesIds.slice(first, last);
    arrIds.forEach(id => {
        dispatch(fetchSingleStory(id, ActionType.TopStories))
    })

}


const fetchSingleStory = (storyId, actionType) => async (dispatch) => {
    const { data } = await axios.get(`/item/${storyId}.json`)
    // console.log("fetchSingleStory:", data)
    dispatch({ type: actionType, payload: data })
}

