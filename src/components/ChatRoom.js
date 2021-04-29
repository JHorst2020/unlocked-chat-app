import React, {useState, useRef} from 'react'
import { db, auth, firebaseRef } from "../config"
import {useCollectionData} from "react-firebase-hooks/firestore"
import MessageCard from "./MessageCard"

export default function ChatRoom({currentRoom, currentRoomName}) {
    const customRef = useRef()
    const [message, setMessage] = useState('');
    const messagesRef = db.collection("messages");

    //Pull last 20 messages and order them by createdAt  (time stamp 37.30) 
    const query = messagesRef.where("room", "==", currentRoom).orderBy("createdAt").limit(20)

    const [messages] = useCollectionData(query, {idField: "id"})

    const keyboardEvent = (e) => {
        if(e.key === 'Enter'){
            handleSubmit(e)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {uid, photoURL, displayName} = auth.currentUser
        const createdAt = firebaseRef.firestore.FieldValue.serverTimestamp()
        if(message.length > 0){
            await messagesRef.add({
                uid, photoURL, createdAt, text: message, room: currentRoom, userName: displayName
            })
        }
        setMessage("")
        customRef.current.scrollIntoView({behavior:"smooth"})
    };

    const handleDelete = (createdAt, id) => {
        db.collection("messages").doc(id).delete()
    }

    return (
        <>
            <div className="messages">
                {messages && messages.map((message) => (
                    <MessageCard message={message} key={message.id} handleDelete={handleDelete}/>
                ))}
                <span ref={customRef}></span>
            </div>
            <form onSubmit={handleSubmit} className="chatForm" >
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message" onKeyDown={keyboardEvent}/>
                <button type="submit" disabled={!message}>Send</button>
            </form>
        </>
    )
}


