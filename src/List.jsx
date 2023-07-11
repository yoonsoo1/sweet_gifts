import React, {useState} from 'react';
import './List.css'

function List(props) {

    // need to connect stuff from firebase!

    // the toggle stuff is from chatGPT
    // Define state to track which items are open
    const [openItems, setOpenItems] = useState([]);

    // Handler function to toggle item open/closed
    const handleToggle = (index) => {
        if (openItems.includes(index)) {
        setOpenItems(openItems.filter(i => i !== index));
        } else {
        setOpenItems([...openItems, index]);
        }
    }

    return (
        <div className="main-list">
            <div className="left-col">
                <div className="left-top">
                    <h3>Your friend is feeling:</h3>
                    <div className="keywords">
                        <ul>
                            <li>happy</li>
                            <li>excited</li>
                            <li>loved</li>
                        </ul>
                    {/* // idk what this is it's from chatGPT but i'm trying to list out all keywords */}
                    {/* {props.keywords.map((keyword, index) => (
                        <span key={index}>{keyword}</span>
                    ))} */}
                    </div>
                </div>
                <div className="left-bottom">
                    {/* <h3>Your friend's event is on {props.date} </h3>  */}
                    <h3>Your friend's event is on March 21st</h3> 
                </div>
            </div>
            <div className="middle-col">
                {/* <h2>{props.name}'s List</h2> */}
                <h2>Yoonsoo's List</h2>
                <div className="all-items">
                    {/* // below is from chatGPT, toggle stuff */}
                    {/* {props.items.map((item, index) => (
                        <div key={index} className="item">
                        <div className="header" onClick={() => handleToggle(index)}>
                            <h3>{item.name} - {item.giver}</h3>
                            <span>{openItems.includes(index) ? 'Close' : 'Open'}</span>
                        </div>
                        {openItems.includes(index) &&
                            <div className="details">
                            <p>{item.description}</p>
                            <p>Keywords: {item.keywords.join(', ')}</p>
                            </div>
                        }
                        </div>
                    ))} */}
                    <ul>
                        <li>Hershey's Candies - Toby</li>
                        <li>Snickers - Brian</li>
                        <li>Twix - John</li>
                        <li>Nerds - Ellie</li>
                    </ul>
                </div>
                <button className="add-gift">ADD A GIFT</button>
            </div>
            <div className="right-col">
                <h3>In this list:</h3> 
                {/* // list out all friends that have joined the list */}
                {/* {props.friends.map((friend, index) => (
                    <div key={index}>{friend}</div>
                ))} */}
                <ul>
                    <li>John</li>
                    <li>Toby</li>
                    <li>Ellie</li>
                    <li>Brian</li>
                </ul>
            </div>
        </div>
    )
}

export default List;