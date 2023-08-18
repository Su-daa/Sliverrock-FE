import React, { useState } from "react";
import "../styles/club.css";

const Club = ({ club }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCallButtonClick = () => {
    console.log("모달 뜬다");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="image-container">
      <img src={club.img} alt="clubImg" className="clubImg" />
      <div className="text-overlay">
        <p>{club.name}</p>
      </div>
      <button className="custom-btn btn-11" onClick={handleCallButtonClick}>
        문의하기
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>
              담당자에게 문의하세요! <br />
              전화번호: {club.phoneNum}
            </p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Club;
