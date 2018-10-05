import firebase from 'firebase';

// Initalize Firebase
var config = {
    apiKey: "AIzaSyCK0FOCrx_KdOyNwTehJ6yuVI28UC2gW-M",
    authDomain: "travel-3d9e7.firebaseapp.com",
    databaseURL: "https://travel-3d9e7.firebaseio.com",
    projectId: "travel-3d9e7",
    storageBucket: "travel-3d9e7.appspot.com",
    messagingSenderId: "412310712855"
};
firebase.initializeApp(config);

export default firebase;