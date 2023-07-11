import React from 'react';
import './Receiver.css';

function Receiver(props) {
    // also need to connect stuff to firebase

    return (
        <div className = "receiver-container">
            <h1>Hi, {props.userName} </h1>
            <p>Fill in the blank below with an adjective. You can add more later! <br></br>
                Your friends will follow your given theme to find the perfect gift. 
            </p>

            {/* // onsubmit save the information in inputs */}
            <form>
                <div>
                    <h2>I'm feeling: </h2>
                    <input type="text" id="emotion"/>
                    {/* // need to save this as a keyword */}
                </div>
                <p>Let us (and your friends) know when your event is! <br></br>
                    Make sure it's the correct date, you can't change this!
                </p>
                <div>
                    <h2>My event is on </h2>
                    {/* // need to save this as a date */}
                    <input type="date" id="selected-date"/>
                </div>
            </form>

            {/* // onclick go to main receiver page */}
            <button className="confirm-button">LOOKS GOOD!</button>

            {/* // onclick go to receiver profile page */}
            <div className="profile-button-container">
                <button className="profile-button"></button>
            </div>
        </div>
    )
}

export default Receiver;