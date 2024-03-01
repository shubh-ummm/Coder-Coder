import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomID(id);
    toast.success("New Room Created!");
  };
  const joinRoom = () => {
    if (!roomID || !username) {
      toast.error("Room ID and Username is required!!");
      return;
    }

    navigate(`/editor/${roomID}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="mainWrapper">
      <div className="homePageWrapper">
        <div className="formWrapper">
          <img src="/src/assets/logo-light.png" alt="logo" />
          <p className="invitation-roomid-text">Paste Invitation ROOM ID</p>
          <div className="inputGroup">
            <input
              type="text"
              className="inputField"
              placeholder="Room ID"
              value={roomID}
              onChange={(e) => setRoomID(e.target.value)}
              onKeyUp={handleInputEnter}
            />
            <input
              type="text"
              className="inputField"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyUp={handleInputEnter}
            />
            <button className="btn joinBtn" onClick={joinRoom}>
              Join
            </button>
            <span className="createNewRoomLink">
              If You Don't Have an Invite then Create{" "}
              <a onClick={createNewRoom} href="" className="createNewRoomLink">
                New Room
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* <div className="footerText">
        <h4>Built With 💖</h4>
      </div> */}
    </div>
  );
};

export default Home;
