// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: 'AIzaSyCAGvaH18e3Njf47_hiGiDpMVh3CG1W7_o',
  authDomain: 'tweeter-d84f4.firebaseapp.com',
  projectId: 'tweeter-d84f4',
  storageBucket: 'tweeter-d84f4.appspot.com',
  messagingSenderId: '608060893554',
  appId: '1:608060893554:web:2c0117b6eb755fdcbd55eb'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
