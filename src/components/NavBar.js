import {useState} from 'react';
import Logout from "./Logout"
import Rooms from "./Rooms";

const NavBar = ({user, currentRoom, setCurrentRoom }) => {
    const [showListMenu, setShowListMenu] = useState(false)
    const [currentRoomName, setCurrentRoomName] = useState("General")

  
    return(
        <nav>
            <h1>
                {user ? <>Current room: <strong>{currentRoomName}</strong> </> : <strong>Chat App</strong>}
            </h1>
            {user ? (
                <>
                    <button className="menu" onClick={() => {setShowListMenu(!showListMenu)}}>
                        <img src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true" alt="menu" style={{opacity: showListMenu ? 0 : 1}} />
                        <img src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true" alt="menu-cross" style={{opacity: showListMenu ? 1 : 0}} />
                    </button>
                    <ul className="list-menu" style={{top: showListMenu && user ? "10vh" : "-100vh"}}>
                        <li>
                            <Logout setShowListMenu={setShowListMenu} />
                        </li>
                        <li>
                            <Rooms currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} setShowListMenu={setShowListMenu} setCurrentRoomName={setCurrentRoomName} currentRoomName={currentRoomName}/> 
                        </li>
                    </ul>
                </>
            ) : null}
        </nav>
    )
}

export default NavBar