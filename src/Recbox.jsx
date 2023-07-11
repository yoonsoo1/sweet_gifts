import React from 'react'

function Recbox() {
  const viewHandler = () => {
    if(window.location.href != 'http://localhost:3000/recmain')
    window.location = '/recmain'
  }

  return (
    <div className="rec-box mt-10">

        <h1>Your First List: Healthy, Foodie... </h1>
        <h2>Guests: Alice, Bob, Chris, Dave</h2>
        <button onClick={viewHandler} style={{fontWeight: "bold", fontSize: "1.5rem", marginLeft: "2rem"}}>View</button>

        <h1>Your Second List: Sporty, Adveturous...</h1>
        <h2>Guests: Zach, Yanis, Xenon</h2>
        <button onClick={viewHandler} style={{fontWeight: "bold", fontSize: "1.5rem", marginLeft: "2rem"}}>View</button>
    </div>
  )
}

export default Recbox