import { combineReducers } from 'redux'
import { topStories, bestStories, newStories } from './stories.reducer'


export default combineReducers({
    topStories,
    bestStories,
    newStories
})