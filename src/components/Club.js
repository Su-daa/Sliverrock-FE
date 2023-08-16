import React from "react";
import "../styles/club.css";
// import clubImg from "../styles/club.jpg";

const Club = ({ club }) => {
  return (
    <div className="image-container">
      <img src={club.img} alt="clubImg" className="clubImg" />
      <div className="text-overlay">
        <p>{club.name}</p>
      </div>
      <button className="custom-btn btn-11">문의하기</button>
    </div>
  );
};

export default Club;
