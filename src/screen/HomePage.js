import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import { useDispatch, useSelector } from "react-redux";
import { setNearUserList } from "../app/store";
import axiosInstance from "../app/axios";

function HomePage() {
  const nearUserList = useSelector((state) => state.nearUserList);
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 근처 친구 목록을 가져오는 비동기 함수
    const fetchNearUserList = async () => {
      try {
        const response = await axiosInstance.get("user/near");
        dispatch(setNearUserList(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchNearUserList();
  }, [dispatch]);

  console.log(nearUserList);

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
        <button className="custom-btn btn-11">친구신청</button>
      </div>
      <Tab />
    </>
  );
}

export default HomePage;
