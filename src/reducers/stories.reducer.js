import ActionType from '../actions/ActionType';
import _ from 'lodash';
import { MenuState } from '../actions/menuState';


export const newStoriesIds = (state = [], action) => {
    switch (action.type) {
        case ActionType.NewStoriesIds:
            return _.uniq([...state, ...action.payload])
        default:
            return state
    }
}

export const topStoriesIds = (state = [], action) => {
    switch (action.type) {
        case ActionType.TopStoriesIds:
            return _.uniq([...state, ...action.payload])
        default:
            return state
    }
}

export const bestStoriesIds = (state = [], action) => {
    switch (action.type) {
        case ActionType.BestStoriesIds:
            return _.uniq([...state, ...action.payload])
        default:
            return state
    }
}

export const newStories = (state = [], action) => {

    switch (action.type) {
        case ActionType.NewStories:
            return _.uniqBy([...state, action.payload], "id")
        default:
            return state
    }
}

export const topStories = (state = [], action) => {


    switch (action.type) {
        case ActionType.TopStories:
            return _.uniqBy([...state, action.payload], "id")
        default:
            return state
    }
}

export const bestStories = (state = [], action) => {

    switch (action.type) {
        case ActionType.BestStories:
            return _.uniqBy([...state, action.payload], "id")
        default:
            return state
    }
}


export const activeMenu = (state = { active: MenuState.newStories }, action) => {
    switch (action.type) {
        case ActionType.MenuState:
            return { active: action.payload }
        default:
            return state
    }
}




