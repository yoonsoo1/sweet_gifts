import React from "react"
import Recbox from "./Recbox"
import firebase from './firebase';

function RecProfile()
{
    function handleLogout() {
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
    }

    return(
        <div className= "rec-prof">
            <h1 className="prof-header">{}'s Gift.me Profile</h1>
            <button className="logout" onClick={handleLogout}>log out</button>
            <button className="add-btn">New List</button>
            <Recbox/>
            <Recbox></Recbox>
        </div>


    );
}

export default RecProfile;