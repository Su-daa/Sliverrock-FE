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
  //로컬에서 친구신청 버튼 클릭시 응답 상태 저장
  //딱히 필요 없을수도?
  const [requestId, setRequestId] = useState(null);

  //요청 발신자 고유번호 가져와야함
  //로그인시 받아올 수 있음
  let userId;

  useEffect(() => {
    // 백엔드에서 근처 친구 목록을 가져오는 비동기 함수
    const fetchNearUserList = async () => {
      try {
        const response = await axios.get("/user/near",{
          headers: {
            Authorization : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjE5MDUxMn0.w3EilPPqHCSkZoUHev5Qrx5yonmtGfiZ3fGIZL8-0MI',
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
  
  

  // const handleFriendRequest = async () => {
  //   try {
  //     // 친구신청 로직...
  //     //요청 발신자 번호를 줘야 함
  //     //헤더 추가해야함
  //     const response = await axiosInstance.post(`/matching/${userId}`);

  //     // response에서 매칭 아이디 추출
  //     const matchingId = response.data.result;

  //     // Redux store에 매칭 아이디 저장
  //     dispatch(setMatchingId(matchingId));

  //     // 로컬 state에도 매칭 아이디 저장
  //     //딱히 필요없을수도...?
  //     setRequestId(matchingId);
  //   } catch (error) {
  //     console.error("친구 신청 실패:", error);
  //   }
  // };

  return (
    <>
      <h1 className="title">추천 친구</h1>
      <Carousel>
        {nearUserList.map((user) => {
          return (
            <>
              <Profile user={user} />
            </>
          );
        })}
      </Carousel>
      <div className="btn-container">
        {/* <button className="custom-btn btn-11" onClick={handleFriendRequest}>
          친구신청
        </button> */}
      </div>
      <Tab />
    </>
  );
}

export default HomePage;
