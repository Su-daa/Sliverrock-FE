import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import { useDispatch, useSelector } from "react-redux";
import { setNearUserList } from "../app/store";
import axios from "axios";
import NoFriends from "../components/NoFriends.js";

function HomePage() {
  const dispatch = useDispatch();

  let nearUserList = useSelector((state) => state.nearUserList);

  useEffect(() => {
    // 백엔드에서 근처 친구 목록을 가져오는 비동기 함수
    const fetchNearUserList = async () => {
      try {
        const response = await axios.get("/user/near", {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjM3MDUwMH0.htSah0331mHe3HGfR2_bocxQYLa3HhnysMeMUMeFzD0",
          },
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

  const handleFriendRequest = async (userId) => {
    try {
      // 친구신청 로직...
      const response = await axios.post(`/matching/${userId}`, null, {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjM3MDUwMH0.htSah0331mHe3HGfR2_bocxQYLa3HhnysMeMUMeFzD0",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(userId);
      console.error("친구 신청 실패:", error);
    }
  };

  if (nearUserList.length === 0) {
    return (
      <>
        <h1 className="title">추천 친구</h1>
        <NoFriends />
        <h1 className="text">추천 친구가 없어요!</h1>
        <Tab />
      </>
    );
  } else {
    return (
      <>
        <h1 className="title">추천 친구</h1>
        <Carousel>
          {nearUserList.map((user) => {
            return (
              <>
                <Profile user={user} />
                <div className="btn-container">
                  <button
                    className="custom-btn btn-11"
                    onClick={() => handleFriendRequest(user.id)}
                  >
                    친구신청
                  </button>
                </div>
              </>
            );
          })}
        </Carousel>

        <Tab />
      </>
    );
  }
}

export default HomePage;
