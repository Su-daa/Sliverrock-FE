import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendList from "../components/FriendList";
import MatchingTab from "../components/MatchingTab";
import Tab from "../components/Tab";
import "../styles/FriendListPage.css";
import axios from "axios";
import { setFriendList } from "../app/store";

function FriendListPage() {
  const friendList = useSelector((state) => state.friendList);
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 근처 친구 목록을 가져오는 비동기 함수
    const fetchFriendList = async () => {
      try {
        const response = await axios.get("/matching/friend");
        dispatch(setFriendList(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchFriendList();
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">{`${friendList.length}명의 실버락이 있어요`}</h1>
      {friendList.map((friendList) => {
        return (
          <>
            <FriendList friendList={friendList} />
          </>
        );
      })}
      <MatchingTab />
      <Tab />
    </div>
  );
}

export default FriendListPage;
