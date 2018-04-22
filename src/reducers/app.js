import { APP_MEDIA_RETRIEVED } from "../reducer-consts";

const initialState = {
    selectedMedia : {}
}

export const appState = (state = initialState, action) => {
    switch (action.type) {
        case APP_MEDIA_RETRIEVED:
        return {
            ...state, 
            selectedMedia: action.data,  
         };
        default:
            return state
    }
}