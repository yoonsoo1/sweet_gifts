import './App.css'; // import the styles used for App.js
import React from 'react';
import { signInWithGoogle } from './firebase';
import firebase from './firebase';
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';


//------
const Login = ({ user }) => {
    if (user) {
         //show "sign out" button
         return (
            <div className="google-sign-in">
                <button className="google-sign-in-button" onClick={signOut}>
                    {/* <img className="google-sign-in-logo" src={user.photoURL} alt="Profile photo" /> */}
                        <div className="text-white">
                                Sign OUT
                        </div>
                </button>
            </div>
        )
    } else {
        return (
            <div className="google-sign-in">
                <button className="google-sign-in-button" onClick={signInWithGoogle}>
                    <img className="google-sign-in-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" />
                        <div className="text-white">
                                Sign in with Google
                        </div>
                </button>
            </div>
        )
    }


}

// this works
// const Login = () => {

//     return (
//         <div className="google-sign-in">
//             <button className="google-sign-in-button" onClick={signInWithGoogle}>
//                 <img className="google-sign-in-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" />
//                     <div className="text-white">
//                             Sign in with Google
//                     </div>
//             </button>
//         </div>
//     )

// }

export default Login; //return the component