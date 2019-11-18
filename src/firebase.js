import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyDMEYZMAHnfkg4AkdXGymcYRkdXbC1RNYw",
    authDomain: "goals-e4217.firebaseapp.com",
    databaseURL: "https://goals-e4217.firebaseio.com",
    projectId: "goals-e4217",
    storageBucket: "goals-e4217.appspot.com",
    messagingSenderId: "206940620920",
    appId: "1:206940620920:web:a2ce7ddc0b54927556458d",
    measurementId: "G-KTYST1QMN6"
  };



export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');