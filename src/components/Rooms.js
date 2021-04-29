import {useState} from 'react'

const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom, currentRoomName, setCurrentRoomName }) => {
    const [ytLink, setYtLink] = useState("")
    const [ytTitle, setYtTitle] = useState("")
    const [ytAuthor, setYtAuthor] = useState("")
    
    const handleYTLink = async (e) => {
        e.preventDefault();
        // console.log("this is ytlink:   ", ytLink)
        const res = await fetch(`https://www.youtube.com/oembed?url=${ytLink}&format=json`)
        const ytInfo = await res.json()
        setYtTitle(ytInfo.title)
        setYtAuthor(ytInfo.author_name)
        setCurrentRoom(ytLink)
        setShowListMenu(false)
        setCurrentRoomName(ytInfo.title);
        setShowListMenu(false)
    }
    

  return (
      <div className="rooms">
        <h2>Enter YouTube Link</h2>
        <form style={{display:"flex"}} onSubmit={handleYTLink}>
          <textarea
            value={ytLink}
            onChange={(e) => setYtLink(e.target.value)}
            placeholder="Paste YouTube Link"
          />
          <button type="submit">Submit</button>
        </form>
        
        
      </div>

  );
};

export default Rooms;
