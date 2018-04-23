
import firebase from "firebase";
import _ from "lodash";
import Observable from "rxjs";
/* 
FireBase upload / download
*/

export class FireBase {

    constructor() { }

    setConfiguration(config) {

        this.FIREBASE_CONFIG = config;
        this.firebase = null;
        this.storage = null;
        this.storageRef = null;
        this.fileRef = null;
        this.folderRef = null;
        this.firebase = firebase;

        if (this.firebase.apps.length === 0) {
            // init sirebase app
            this.firebase.initializeApp(this.FIREBASE_CONFIG);
            // init firebase storage
            this.storage = this.firebase.storage();
            // Create a storage reference from our storage service
            this.storageRef = this.storage.ref();
        }

    }

    setFolderReference(folderRef) {
        if (_.isEmpty(this.storageRef)) return;
        this.folderRef = this.storageRef.child(folderRef);
    }

    setFileReference(fileRef) {
        if (_.isEmpty(this.storageRef)) return;
        this.fileRef = this.storageRef.child(fileRef);
    }

    putFileToServer(data, fileType) {
        if (_.isEmpty(this.fileRef)) return;
        var metadata = {
            contentType: fileType,
        };

        return this.fileRef.put(data, metadata);
    }

    putFileStringToServer(data, fileType) {
        if (_.isEmpty(this.fileRef)) return;
        var metadata = {
            contentType: fileType,
        };

        return this.fileRef.putString(JSON.stringify(data));
    }

    downloadDataURLFromServer(file) {
        if (_.isEmpty(this.storageRef)) return;
        return this.storageRef.child(file).getDownloadURL();
    }

}


export const detectMimeType = (file) => {

}


export const getFileAsDataURL = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        return (reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export const getCurrentDate = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    return dd + '/' + mm + '/' + yyyy;
}


const dec2hex = (dec) => {
    return ('0' + dec.toString(16)).substr(-2)
  }
  
  // generateId :: Integer -> String
 export const generateId = (len) => {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
  }
  
  