import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import MatchingTab from "../components/MatchingTab";
import { useDispatch, useSelector } from "react-redux";
import { setFriendRequestList } from "../app/store";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import NoFriends from "../components/NoFriends.js";

function FriendRequestPage() {
  let friendRequestList = useSelector((state) => state.friendRequestList);
  const [activePageIndex, setActivePageIndex] = useState(0); // 현재 페이지 인덱스
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 매칭 요청 친구 목록을 가져오는 비동기 함수
    const fetchFriendRequestList = async () => {
      try {
        const response = await axios.get("/matching", {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjM3MDUwMH0.htSah0331mHe3HGfR2_bocxQYLa3HhnysMeMUMeFzD0",
          },
        });
        let fetchedList = response.data;
        console.log(JSON.stringify(fetchedList, null, 2));
        dispatch(setFriendRequestList(fetchedList.result));
      } catch (error) {
        console.log(error);
      }
    };

    fetchFriendRequestList();
  }, [dispatch]);

  // 매칭 수락 버튼 함수
  const matchingAccept = async (matchingId) => {
    try {
      const response = await axios.post(
        `/matching/accept/${matchingId}`,
        null,
        {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjM3MDUwMH0.htSah0331mHe3HGfR2_bocxQYLa3HhnysMeMUMeFzD0",
          },
        }
      );
      console.log("매칭 수락 결과:", response.data);
      // 수락 버튼을 눌렀을 때 해당 carousel 아이템을 제거
      const updatedFriendRequestList = friendRequestList.filter(
        (user) => user.matchingId !== matchingId
      );
      dispatch(setFriendRequestList(updatedFriendRequestList));
      setActivePageIndex(activePageIndex + 1);
    } catch (error) {
      console.log(matchingId);
      console.error("매칭 수락 실패:", error);
    }
  };

  // 매칭 거절 버튼 함수
  const matchingReject = async (matchingId) => {
    try {
      const response = await axios.delete(`/matching/reject/${matchingId}`, {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjM3MDUwMH0.htSah0331mHe3HGfR2_bocxQYLa3HhnysMeMUMeFzD0",
        },
      });
      console.log("매칭 거절 결과:", response.data);
      // 수락 버튼을 눌렀을 때 해당 carousel 아이템을 제거
      const updatedFriendRequestList = friendRequestList.filter(
        (user) => user.matchingId !== matchingId
      );
      dispatch(setFriendRequestList(updatedFriendRequestList));
      setActivePageIndex(activePageIndex + 1);
    } catch (error) {
      console.error("매칭 거절 실패:", error);
    }
  };

  const handleCarouselChange = (newPageIndex) => {
    // Carousel 페이지 전환 시 호출되는 함수
    setActivePageIndex(newPageIndex);
  };

  if (friendRequestList.length === 0) {
    return (
      <>
        <h1 className="title">{`${friendRequestList.length}명의 실버락 요청이 왔어요`}</h1>
        <NoFriends />
        <h1 className="text">친구 요청이 없어요!</h1>
        <MatchingTab />
        <Tab />
      </>
    );
  } else {
    return (
      <>
        <h1 className="title">{`${friendRequestList.length}명의 실버락이 있어요`}</h1>
        <div className="profile-box">
          <Carousel onChange={(newIndex) => handleCarouselChange(newIndex)}>
            {friendRequestList.map((user) => {
              return (
                <>
                  <div key={user.matchingId}>
                    <Profile user={user} />
                    <div className="btn-container">
                      <button
                        className="custom-btn btn-11"
                        onClick={() => matchingAccept(user.matchingId)}
                      >
                        수락
                      </button>
                      <button
                        className="custom-btn btn-11"
                        onClick={() => matchingReject(user.matchingId)}
                      >
                        거절
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>

        <MatchingTab />
        <Tab />
      </>
    );
  }
}

export default FriendRequestPage;
