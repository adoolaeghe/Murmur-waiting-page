import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDF7KbrfqviWmGKy22_gsd0pH9QfzFCkek",
  authDomain: "echomancy-cb4ff.firebaseapp.com",
  databaseURL: "https://echomancy-cb4ff.firebaseio.com",
  projectId: "echomancy-cb4ff",
  storageBucket: "echomancy-cb4ff.appspot.com",
  messagingSenderId: "795370614405"
};
firebase.initializeApp(config);
export default firebase;
