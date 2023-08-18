import React from "react";
import Profile from "../components/Profile";
import Tab from "../components/Tab";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

function MyPage() {
  let navigate = useNavigate();

  // 수정하기 버튼 눌럿을때 어떻게 해야할까나요
  return (
    <>
      <h1 className="title">내 정보</h1>
      <div className="profile-box">
        <Profile />
      </div>
      <div className="btn-container">
        <button
          className="custom-btn btn-11"
          onClick={() => {
            navigate("/EditPage");
          }}
        >
          수정하기
        </button>
      </div>
      <Tab />
    </>
  );
}

export default MyPage;
