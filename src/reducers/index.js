import { combineReducers } from 'redux'
import {
    topStoriesIds,
    bestStoriesIds,
    newStoriesIds,
    topStories,
    newStories,
    bestStories,
    activeMenu
} from './stories.reducer'


export default combineReducers({
    topStoriesIds,
    bestStoriesIds,
    newStoriesIds,
    topStories,
    newStories,
    bestStories,
    activeMenu,
})