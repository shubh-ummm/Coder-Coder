import { useState } from "react";
import Client from "../components/Client";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "abc abc" },
    { socketId: 2, username: "xyz xyz" },
  ]);
  return (
    <div className="mainWrap">
      <div className="leftPane">
        <div className="leftPaneInner">
          <div className="logo">
            <img src="/src/assets/logo.png" alt="logo" className="logoImage" />
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
      <div className="editorWrap">Editor goes here</div>
    </div>
  );
};

export default EditorPage;
