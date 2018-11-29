import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCDQPim8PaszBpjfAE_AG_tJBlHZmUzXcQ",
    authDomain: "poniedzialek-e01cf.firebaseapp.com",
    databaseURL: "https://poniedzialek-e01cf.firebaseio.com",
    projectId: "poniedzialek-e01cf",
    storageBucket: "poniedzialek-e01cf.appspot.com",
    messagingSenderId: "883759460601"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()