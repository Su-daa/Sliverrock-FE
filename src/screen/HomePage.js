import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import { useDispatch, useSelector } from "react-redux";
import { setNearUserList, setMatchingId } from "../app/store";
import axios from 'axios';

//import axiosInstance from "../app/axios";

function HomePage() {
  const dispatch = useDispatch();

  let loginData = useSelector((state)=>state.loginData);
  let nearUserList = useSelector((state) => state.nearUserList);

  const [selectedProfile, setSelectedProfile] = useState(null); // 선택된 프로필 정보 상태 추가
  const handleProfileSelect = (user) => {
    setSelectedProfile(user);
  };

  useEffect(() => {
    // 백엔드에서 근처 친구 목록을 가져오는 비동기 함수
    const fetchNearUserList = async () => {
      try {
        const response = await axios.get("/user/near",{
          headers: {
            Authorization : loginData.accessToken,
          }
        });
        let fetchedList = response.data;
        console.log(JSON.stringify(fetchedList, null, 2));
        dispatch(setNearUserList(fetchedList.result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchNearUserList();
  }, [dispatch]);

  console.log(nearUserList);
  
  

  const handleFriendRequest = async () => {
    try {
      const response = await axios.post("/matching/4/",{
        headers: {
          Authorization : loginData.accessToken,
        }
      });

      let fetchedData = response.data;
      console.log(JSON.stringify(fetchedData, null, 2));

      let matchingId = fetchedData.result;
      // Redux store에 매칭 아이디 저장
      dispatch(setMatchingId(matchingId));

    } catch (error) {
      console.error("친구 신청 실패:", error);
    }
  };

  return (
    <>
      <h1 className="title">추천 친구</h1>
      <Carousel>
        {nearUserList.map((user) => {
          return (
            <>
              <Profile
              key={user.id}
              user={user} />
            </>
          );
        })}
      </Carousel>
      <div className="btn-container">
        <button className="custom-btn btn-11" onClick={handleFriendRequest}>
          {selectedProfile
            ? `친구신청: ${selectedProfile.nickname}` // 선택된 프로필 정보로 버튼 텍스트 업데이트
            : "친구신청"}
        </button>
      </div>
      <Tab />
    </>
  );
}

export default HomePage;
