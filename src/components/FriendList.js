import React from "react";
import "../styles/friendList.css";
import friendListImg from "../styles/friendList.jpg";
import { BsTelephoneFill } from "react-icons/bs";

function FriendList(props) {
  const handleCallButtonClick = () => {
    alert("전화걸기");
  };

  console.log(props);

  return (
    <div>
      <div className="image-container">
        <img
          src={props.friend.getS3Res.imgUrl}
          alt="friendListImg"
          className="friendListImg"
        />
        <div>
          <h3 className="container">
            <h2 className="container">{props.friend.nickname}</h2>
            {props.friend.birth}&nbsp; ({props.friend.gender})
          </h3>
          <button className="callButton" onClick={handleCallButtonClick}>
            <div className="iconImg">
              <BsTelephoneFill />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendList;
