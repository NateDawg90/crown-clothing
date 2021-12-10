import firebase from "firebase/compat";
import 'firebase/compat/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('EmywTuCzDliP7fHmZg9U').collection('cartItems').doc('C1AK8IlQq2ZRfjmr0Q4K')
firestore.doc('/users/EmywTuCzDliP7fHmZg9U/cartItems/EmywTuCzDliP7fHmZg9U')
firestore.collection('/users/EmywTuCzDliP7fHmZg9U/cartItems')