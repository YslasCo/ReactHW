import React from "react";
import "../styles/Cardstyle.css";

function FriendCard(props) {
  return (
    <div className="card" onClick= {props.handleImageClick}>
      <div className="img-container tilt">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;