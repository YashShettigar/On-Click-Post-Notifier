import { combineReducers } from "redux";

const notification = (state = false, actions) => {
    switch (actions.type){
        case 'TOGGLE':
            return !state
        default:
            return state
    }
}

export const toggleNotification = () => (
    {
        type: 'TOGGLE',
    }
)


export default combineReducers({ notification })