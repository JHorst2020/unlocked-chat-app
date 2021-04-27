import React, {useState} from 'react'
import {auth} from "../config"

export default function MessageCard({message, handleDelete}) {

    const {id, text, uid, createdAt, photoURL} = message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    const [showActionsButtons, setShowActionsButtons] = useState(false)
    const toggleCard = () => {
        setShowActionsButtons(!showActionsButtons)
    }

    return (
        <>
            <div className={`message ${messageClass}`}>
                <div className="user-name">
                    <p>Jerzy Horst</p>
                </div>
                <div className="photo">
                    <img src={photoURL || `${process.env.PUBLIC_URL}/avatar.png`} alt="avatar" />
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
                <div style={{display: showActionsButtons ? "block" : "none"}} className="actions">
                    <button onClick={() => handleDelete(createdAt, id)}>Delete</button>
                </div>
            </div>
        </>
    )
}
