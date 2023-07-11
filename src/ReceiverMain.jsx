import React from "react"

function RecMain()
{
    return(
        <div className= "RecMain()">
    <h1 style={{fontWeight: 'bold', fontSize: "3rem"}}>Get Excited, Carol!</h1>
    <h2 style={{fontWeight: 'bold', fontSize: "3rem"}}>Your event is in 14 days!!</h2>
    <br />
    <h2 style={{fontWeight: 'bold', fontSize: "1.7rem"}}>Your keywords are:</h2>
    <h2 style={{fontWeight: 'bold', fontSize: "1.4rem"}}>Healthy, Foodie</h2>

    <button style={{ border: "1px solid black", padding: "10px", fontWeight: 'bold'}}>Add Keyword</button>
    <br />
    <br />
    <h2 style={{fontWeight: 'bold', fontSize: "1.4rem"}}>Invite More Friends</h2>
    <input style={{ border: "1px solid black", padding: "10px", fontWeight: 'bold'}} type="text" value="gift.me/ab8isobmkw26"/>
    <button style={{ border: "1px solid black", padding: "10px", fontWeight: 'bold'}}>Copy Link</button>
    </div>
    );
    
}

export default RecMain;