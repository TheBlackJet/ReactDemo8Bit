import { APP_MEDIA_RETRIEVED, APP_INITTIAL_DATA_RETRIEVED, APP_UPDATE_CONTENT_LIST } from "../reducer-consts";

const initialState = {
    selectedMedia: {},
    contentList: [{}]
}

export const appState = (state = initialState, action) => {
    switch (action.type) {
        case APP_UPDATE_CONTENT_LIST:
            return {
                ...state, // 1 level 
                contentList: action.data,
            };
        case APP_MEDIA_RETRIEVED:
            return {
                ...state,
                selectedMedia: action.data,
            };
        case APP_INITTIAL_DATA_RETRIEVED:
            return {
                ...state,
                contentList: action.payload,
            };
        default:
            return state
    }
}