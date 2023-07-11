import React from 'react'
import Login from './Login';
import {useEffect, useState} from 'react';
import firebase from './firebase';

function Start() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
        }, []);
    const checkoutHandler = () => {
        if(window.location.href !== 'http://localhost:3000/list')
        window.location = '/list'
    }
  return (
    <div>
        <div className='start-page'>
            <div className="gift-rec-text">
                i am GIVING gifts
            </div>
            <div>
                <input className = "gift-rec-input" type="text" placeholder="Enter your link code here" />
                <button className='gift-btn' onClick={checkoutHandler}>Check out</button>
            </div>
        </div>
        <div className="receiving-login">
        <div className="receiving-login-text">
            i am RECEIVING gifts
        </div>
            <Login user={user}/>
        </div>
    </div>
  )
  
}

var firstLogin = true;

function handleAuthStateChange(user) {
    if (user) {
        // User is signed in.
          if(firstLogin && window.location.href !== 'http://localhost:3000/profile') {
              window.location = '/profile'
              console.log('in')
              firstLogin = true;
          }
      }
  
      if(!user) {
          if(window.location.href !== 'http://localhost:3000/')
              window.location = '/'
            firstLogin = true;
      }  
}

// // check to see if user is alr logged in I dont know if this is right
firebase.auth().onAuthStateChanged(handleAuthStateChange);


export default Start
