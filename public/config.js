  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaOgFB8a-3kCec2pG_NmOV0Q82rkgMbCo",
    authDomain: "event-gallery-c8aff.firebaseapp.com",
    databaseURL: "https://event-gallery-c8aff.firebaseio.com",
    projectId: "event-gallery-c8aff",
    storageBucket: "event-gallery-c8aff.appspot.com",
    messagingSenderId: "244494251095"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }