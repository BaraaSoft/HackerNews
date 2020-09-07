import ActionType from './ActionType'


export const setActiveMenu = (menuState) => (dispatch) => {
    dispatch({ type: ActionType.MenuState, payload: menuState })
}