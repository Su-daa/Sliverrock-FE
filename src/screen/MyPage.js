import React, {useEffect} from "react";
import Profile from "../components/Profile";
import Tab from "../components/Tab";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMyInfo, setMatchingId } from "../app/store";
import axios from 'axios';

function MyPage() {

  let dispatch = useDispatch();
  let loginData = useSelector((state)=>state.loginData);
  let myInfo = useSelector((state)=>state.myInfo);
  let navigate = useNavigate();
  useEffect(() => {
    // 백엔드에서 근처 친구 목록을 가져오는 비동기 함수
    const fetchMyInfo = async () => {
      try {
        const response = await axios.get("/user/myinfo",{
          headers: {
            Authorization : loginData.accessToken,
          }
        });
        let fetchedDatas = response.data;
        console.log(JSON.stringify(fetchedDatas, null, 2));
        dispatch(setMyInfo(fetchedDatas.result));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyInfo();
  }, [dispatch]);

  
  
  return (
    <>
      <h1 className="title">내 정보</h1>
      <div className="profile-box">
        <Profile user={myInfo} />
        
      </div>
      <div className="btn-container">
        <button
          className="custom-btn btn-11"
          onClick={()=>{
            return(window.location.href = "flutterapp://open-edit-page");
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
