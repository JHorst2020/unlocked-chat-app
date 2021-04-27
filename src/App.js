import {useAuthState } from "react-firebase-hooks/auth"
import {useState} from 'react'
import Login from "./components/Login"
import ChatRoom from "./components/ChatRoom"
import {auth} from "./config"
import './App.css';

function App() {
  const [currentRoom, setCurrentRoom] = useState("General")
  const [user] = useAuthState(auth)
  console.log("this is the user:    ", user)

  return (
    <div className="App">
      <div>
        {user ? <ChatRoom currentRoom={currentRoom} /> : <Login />}
      </div>
    </div>
  );
}

export default App;
