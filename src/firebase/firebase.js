import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD9zUGrKzTAfvcqrbwD3WYY3tXMlzKuO1o",
    authDomain: "expensify-e941a.firebaseapp.com",
    databaseURL: "https://expensify-e941a.firebaseio.com",
    projectId: "expensify-e941a",
    storageBucket: "expensify-e941a.appspot.com",
    messagingSenderId: "52365150887"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
.once('value')
.then((snapshot) => {
  console.log(snapshot.val());
});

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 9645786567
});