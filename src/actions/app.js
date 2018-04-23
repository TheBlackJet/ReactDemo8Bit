import {
    APP_MEDIA_RETRIEVED,
    APP_INITTIAL_DATA_RETRIEVED,
    APP_UPDATE_CONTENT_LIST,
    APP_MEDIA_UPLOAD_FAILED,
    APP_MEDIA_UPLOAD_SUCCESSFULLY,
    APP_DATA_DOWNLOAD_FAILED
} from "../reducer-consts";
import {
    ACCEPTED_MIME_TYPES,
    FIREBASE_DATA_FILE,
    FIREBASE_FOLDER
} from "../app-config-constants";
import {
    getCurrentDate,
    getFileAsDataURL,
    generateId
} from "../utility-functions";

import { FIREBASE_CONFIG } from "../app-config-constants";
import { FireBase } from '../utility-functions';
import { Observable } from "rxjs/Observable";

// init FireBase
const fireBase = new FireBase();
fireBase.setConfiguration(FIREBASE_CONFIG); // set fireBase configs

export const mediaSelect = () => {
    return (dispatch) => {
        dispatch({
            type: APP_MEDIA_RETRIEVED
        });
    }
}

export const addFileToTheList = (data) => {

    return (dispatch, getState) => {
        // add to the image list object json
        const contentList = getState().appState.contentList;
        const fileName = FIREBASE_FOLDER + "/" + data.file.name;

        contentList.push({
            id: generateId(),
            title: data.title,
            description: data.description,
            dateCreated: getCurrentDate(),
            url: fileName
        });

        // update contentList state
        dispatch({
            type: APP_UPDATE_CONTENT_LIST,
            data: contentList
        })

        // upload media file to clould storage
        fireBase.setFileReference(fileName);
        fireBase.putFileToServer(data.file, data.fileType)
            .then(result => {
                dispatch({
                    type: APP_MEDIA_UPLOAD_SUCCESSFULLY,
                    filename: data.file.name
                })
            })
            .catch(() => {
                dispatch({
                    type: APP_MEDIA_UPLOAD_FAILED,
                    filename: data.file.name
                })
            })

        // upload data.json file to the server 
        fireBase.setFileReference(FIREBASE_DATA_FILE);
        return fireBase.putFileStringToServer(contentList, "application/json")
            .then(result => {
                dispatch({
                    type: APP_MEDIA_UPLOAD_SUCCESSFULLY,
                    filename: data.file.name
                })
            })
            .catch(() => {
                dispatch({
                    type: APP_MEDIA_UPLOAD_FAILED,
                    filename: data.file.name
                })
            })
    }
}

export const getInitialData = () => {

    return (dispatch, getState) => {
        fireBase.downloadDataURLFromServer(FIREBASE_DATA_FILE)
            .then(url => {
                return fetch(url).then(resp => resp.text());
            })
            .then(result => {
                dispatch({
                    type: APP_INITTIAL_DATA_RETRIEVED,
                    payload: JSON.parse(result)
                })
            })
            .catch(() => {
                dispatch({
                    type: APP_DATA_DOWNLOAD_FAILED,
                    filename: FIREBASE_DATA_FILE
                })
            })
    }

}

