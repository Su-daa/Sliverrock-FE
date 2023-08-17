import React, { useState } from "react";
import "../styles/friendList.css";
import { BsTelephoneFill } from "react-icons/bs";

function FriendList(props) {
  const [showModal, setShowModal] = useState(false);

  const handleCallButtonClick = () => {
    console.log("모달 뜬다");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
            <button className="callButton" onClick={handleCallButtonClick}>
              <div className="iconImg">
                <BsTelephoneFill />
              </div>
            </button>
          </h3>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>전화번호: {props.friend.phoneNum}</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendList;
