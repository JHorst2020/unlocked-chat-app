import {useAuthState } from "react-firebase-hooks/auth"
import {useState} from 'react'
import Login from "./components/Login"
import ChatRoom from "./components/ChatRoom"
import NavBar from "./components/NavBar"
import {auth} from "./config"
import './App.css';
import Spinner from "./components/Spinner"

const App = () => {
  const [currentRoom, setCurrentRoom] = useState("General")
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)
  console.log("this is the user:    ", user)


  return (
    <div className="app">
      {/* {loading && <Spinner />} */}
      <NavBar user={user} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      <div className="content">
        {user ? <ChatRoom currentRoom={currentRoom} /> : <Login />}
      </div>
    </div>
  );
  }

export default App;
