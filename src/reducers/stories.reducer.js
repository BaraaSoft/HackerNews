import ActionType from '../actions/ActionType';
import _ from 'lodash';


export const newStories = (state = [], action) => {
    switch (action.type) {
        case ActionType.NewStories:
            return _.uniqBy([...state, ...action.payload], "id")
        default:
            return state
    }
}

export const topStories = (state = [], action) => {
    switch (action.type) {
        case ActionType.TopStories:
            return _.uniqBy([...state, ...action.payload], "id")
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




