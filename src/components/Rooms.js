import {useState} from 'react'

const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
    const [ytLink, setYtLink] = useState("")
    
    
    
    const handleRoomChange = (room) => {
        setCurrentRoom(room);
        setShowListMenu(false);

  };
  return (
    <>
      <div className="rooms">
        {/* <form style={{display:"flex", backgroundColor:"red"}}>
          <textarea
            value={ytLink}
            onChange={(e) => setYtLink(e.target.value)}
            placeholder="Paste YouTube Link"
          />
          <button type="submit">Submit</button>
        </form> */}
        <h2>Select room</h2>
        <ul>
          <li
            onClick={() => {
              handleRoomChange("HTML");
            }}
            className={currentRoom === "HTML" ? "active" : ""}
          >
            HTML
          </li>
          <li
            onClick={() => {
              handleRoomChange("CSS");
            }}
            className={currentRoom === "CSS" ? "active" : ""}
          >
            CSS
          </li>
          <li
            onClick={() => {
              handleRoomChange("General");
            }}
            className={currentRoom === "General" ? "active" : ""}
          >
            General
          </li>
          <li
            onClick={() => {
              handleRoomChange("ReactJs");
            }}
            className={currentRoom === "ReactJs" ? "active" : ""}
          >
            ReactJs
          </li>
          <li
            onClick={() => {
              handleRoomChange("JavaScript");
            }}
            className={currentRoom === "JavaScript" ? "active" : ""}
          >
            JavaScript
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rooms;