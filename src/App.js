import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import { auth } from './firebase/firebase.utils'
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null) 


  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snap => {
          setCurrentUser({
            id: snap.id,
            ...snap.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, [])

 
  return (
    <div>
      <Header  currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;