import { APP_MEDIA_RETRIEVED } from "../reducer-consts";

export const mediaSelect = () => {
    return (dispatch) => {
        dispatch({
            type: APP_MEDIA_RETRIEVED
        });
    }
}