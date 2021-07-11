import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDare57SIPZY7vq_7ZRpehMLIBx0HsB8y8",
    authDomain: "vue-auth-ce67f.firebaseapp.com",
    projectId: "vue-auth-ce67f",
    storageBucket: "vue-auth-ce67f.appspot.com",
    messagingSenderId: "15955701896",
    appId: "1:15955701896:web:a50b1ec3fe00ca2396af3d"
};

export default firebase.initializeApp(firebaseConfig);