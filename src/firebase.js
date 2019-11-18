import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "your api key",
    authDomain: "auth domian url",
    databaseURL: "url",
    projectId: "your project id",
    // storageBucket: "goals-e4217.appspot.com",
    messagingSenderId: "id",
    appId: "your app id",
    measurementId: "G-KTYST1QMN6"
  };



export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');