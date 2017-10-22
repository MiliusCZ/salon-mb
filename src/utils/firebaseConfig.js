import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBs0PvpjJ0EFr6rDsQ2hkulBiLiiBib62E",
  authDomain: "salon-mysthic-beauty.firebaseapp.com",
  databaseURL: "https://salon-mysthic-beauty.firebaseio.com",
  projectId: "salon-mysthic-beauty",
  storageBucket: "salon-mysthic-beauty.appspot.com",
  messagingSenderId: "424207927560"
};

firebase.initializeApp(config);

export default firebaseConfig;
