

/* 
FireBase upload / download
*/

class FireBase {
    FIREBASE_CONFIG = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        storageBucket: ""
    };

    firebase = null;

    storage = null;

    storageRef = null;

    constructor(config, firebase) {
        this.FIREBASE_CONFIG = config;
        this.firebase = firebase;
        // init sirebase app
        this.firebase.initializeApp(this.FIREBASE_CONFIG);
        // init firebase storage
        this.storage = this.firebase.storage();
        // Create a storage reference from our storage service
        this.storageRef = this.storage.ref();
    }


    getFileReference(file){
        var imagesRef = storageRef.child('media');
    }
}