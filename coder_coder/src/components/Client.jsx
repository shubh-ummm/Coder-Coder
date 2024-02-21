import React from "react";
import Avatar from "react-avatar";

const Client = (props) => {
  return (
    <div className="client">
      <Avatar name={props.username} size="50" round="10px" />
    </div>
  );
};

export default Client;
