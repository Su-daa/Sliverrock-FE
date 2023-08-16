import React, { useEffect } from "react";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import MatchingTab from "../components/MatchingTab";
import { useDispatch, useSelector } from "react-redux";
import axios from "../app/axios";
import { setFriendRequestList } from "../app/store";
import Carousel from "react-material-ui-carousel";
import axiosInstance from "../app/axios";

function FriendRequestPage() {
  let friendRequestList = useSelector((state) => state.friendRequestList);
  let matchingId = useSelector((state) => state.matchingSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 매칭 친구 목록을 가져오는 비동기 함수
    const fetchFriendRequestList = async () => {
      try {
        //헤더 추가해야함
        const response = await axiosInstance.get("/matching");
        dispatch(setFriendRequestList(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchFriendRequestList();
  }, [dispatch]);

  // 매칭 수락 버튼 함수
  const matchingAccept = async () => {
    try {
      // 매칭 아이디를 이용하여 요청 보내기
      //헤더 추가해야함
      const response = await axiosInstance.post(
        `/matching/accept/${matchingId}`
      );
      console.log("매칭 수락 결과:", response.data);
    } catch (error) {
      console.error("매칭 수락 실패:", error);
    }
  };

  // 매칭 거절 버튼 함수
  const matchingReject = async () => {
    try {
      // 매칭 아이디를 이용하여 요청 보내기
      //헤더 추가해야함
      const response = await axiosInstance.post(
        `/matching/reject/${matchingId}`
      );
      console.log("매칭 거절 결과:", response.data);
    } catch (error) {
      console.error("매칭 거절 실패:", error);
    }
  };

  return (
    <>
      <h1 className="title">{`${friendRequestList.length}명의 실버락이 있어요`}</h1>
      <div className="profile-box">
        <Carousel>
          {friendRequestList.map((user) => {
            return (
              <>
                <Profile user={user} />
              </>
            );
          })}
        </Carousel>
      </div>

      <div className="btn-container">
        <button className="custom-btn btn-11" onClick={matchingAccept}>
          수락
        </button>
        <button className="custom-btn btn-11" onClick={matchingReject}>
          거절
        </button>
      </div>
      <MatchingTab />
      <Tab />
    </>
  );
}

export default FriendRequestPage;
