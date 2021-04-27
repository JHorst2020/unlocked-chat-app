import React from 'react'
import {auth, firebaseRef} from "../config"

export default function Login() {
    return (
        <div className="login">
            <button onClick={() => {
                auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider())
            }}>
                Login with Google
            </button>
        </div>
    )
}
