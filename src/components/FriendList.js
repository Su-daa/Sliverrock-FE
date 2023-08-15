import React from "react";
import "../styles/friendList.css";
import friendListImg from "../styles/friendList.jpg";
import { BsTelephoneFill } from "react-icons/bs";

function FriendList(props) {
  const handleCallButtonClick = () => {
    alert("전화걸기");
  };

  console.log(props);
  // let imgUrl = props.getS3Res.imgUrl;

  return (
    <div>
      <div className="image-container">
        <img
          src={friendListImg}
          alt="friendListImg"
          className="friendListImg"
        />
        <div>
          <h3 className="container">
            <h2 className="container">{props.friendList.nickname}</h2>
            {props.friendList.birth}&nbsp; ({props.friendList.gender})
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
