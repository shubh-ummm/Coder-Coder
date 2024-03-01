import { useRef, useState, useEffect } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
// import { initSocket } from "../socket";
import { useLocation } from "react-router-dom";
// import ACTIONS from "../Actions";

const EditorPage = () => {
  // const socketRef = useRef(null);
  // const location = useLocation();
  // useEffect(() => {
  //   const init = async () => {
  //     socketRef.current = await initSocket();
  //     socketRef.current.emit(ACTIONS.JOIN,{
  //       roomId,
  //       username:location.state?.username,
  //     });
  //   };
  //   init();
  // }, [])
  
  const [clients, setClients] = useState([
    { socketId: 1, username: "abssssssc abc" },
  ]);
  return (
    <div className="mainWrap">
      <div className="leftPane">
        <div className="leftPaneInner">
          <div className="logo">
            <img
              src="/src/assets/logo-dark.png"
              alt="logo"
              className="logoImage"
            />
          </div>
          <h3>connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room ID</button>
        <button className="btn leaveBtn" style={{ background: "#3c3c3c" }}>
          Leave Room
        </button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
