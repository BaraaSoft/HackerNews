import ActionType from '../actions/ActionType';
import _ from 'lodash';


export const newStoriesIds = (state = [], action) => {
    switch (action.type) {
        case ActionType.NewStoriesIds:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export const topStoriesIds = (state = [], action) => {
    switch (action.type) {
        case ActionType.TopStoriesIds:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export const bestStoriesIds = (state = [], action) => {
    switch (action.type) {
        case ActionType.BestStoriesIds:
            return [...state, ...action.payload]
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
            return _.uniqBy([...state, ...action.payload], "id")
        default:
            return state
    }
}




