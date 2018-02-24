import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase, copied from cloud console
var config = {
  apiKey: "AIzaSyDlRxHKYbuCOW25uCEN2mnAAgnholag8tU",
  authDomain: "amazeballs-by-q42.firebaseapp.com",
  databaseURL: "https://amazeballs-by-q42.firebaseio.com",
  projectId: "amazeballs-by-q42",
  storageBucket: "amazeballs-by-q42.appspot.com",
  messagingSenderId: "972553621573"
};
firebase.initializeApp(config);

// a reference to the Balls collection
const ballsCollection = firebase.firestore()
  .collection('balls');

// the shared state object that any vue component
// can get access to
export const store = {
  ballsInFeed: null,
  currentUser: null,
  writeBall: (message) => ballsCollection.add({
    createdOn: new Date(),
    author: store.currentUser.uid,
    author_name: store.currentUser.displayName,
    author_image: store.currentUser.photoURL,
    message
  }),
};

// onSnapshot is executed every time the data
// in the underlying firestore collection changes
// It will get passed an array of references to 
// the documents that match your query
ballsCollection
  .limit(5)
  .onSnapshot((ballsRef) => {
    const balls = [];
    ballsRef.forEach((doc) => {
      const ball = doc.data();
      ball.id = doc.id;
      balls.push(ball);
    });
    console.log('Received Balls feed:', balls);
    store.ballsInFeed = balls;
  });

// When a user logs in or out, save that in the store
firebase.auth().onAuthStateChanged((user) => {
  console.log('Logged in as:', user);
  store.currentUser = user;
});
