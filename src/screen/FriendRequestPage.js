import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import "../styles/HomePage.css";
import Tab from "../components/Tab";
import MatchingTab from "../components/MatchingTab";
import { useDispatch, useSelector } from "react-redux";
import { setFriendRequestList } from "../app/store";
import Carousel from "react-material-ui-carousel";
import axios from "axios";

function FriendRequestPage() {
  let friendRequestList = useSelector((state) => state.friendRequestList);
  let matchingId = useSelector((state) => state.matchingSlice);
  const [isAccepting, setIsAccepting] = useState(false); //버튼 중복 클릭 금지
  const [isRejecting, setIsRejecting] = useState(false);
  const [acceptSuccess, setAcceptSuccess] = useState(false); //버튼 요청 성공시 상태 변경
  const [rejectSuccess, setRejectSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 매칭 요청 친구 목록을 가져오는 비동기 함수
    const fetchFriendRequestList = async () => {
      try {
        const response = await axios.get("/matching", {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjE5ODgwNH0.j2NLTZsAtKQwqYfoBFcDKqvfEOmdWA-qWk5WU-ashcU",
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
  const matchingAccept = async () => {
    try {
      setIsAccepting(true);
      const response = await axios.post(`/matching/accept/${matchingId}`, {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjE5ODgwNH0.j2NLTZsAtKQwqYfoBFcDKqvfEOmdWA-qWk5WU-ashcU",
        },
      });
      console.log("매칭 수락 결과:", response.data);
      setAcceptSuccess(true); //수락 요청 성공
    } catch (error) {
      console.error("매칭 수락 실패:", error);
      console.log(matchingId);
    } finally {
      setIsAccepting(false); // 실패시 수락 버튼 활성화
    }
  };

  // 매칭 거절 버튼 함수
  const matchingReject = async () => {
    try {
      setIsRejecting(true);
      const response = await axios.post(`/matching/reject/${matchingId}`, {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjE5ODgwNH0.j2NLTZsAtKQwqYfoBFcDKqvfEOmdWA-qWk5WU-ashcU",
        },
      });
      console.log("매칭 거절 결과:", response.data);
      setRejectSuccess(true);
    } catch (error) {
      console.error("매칭 거절 실패:", error);
    } finally {
      setIsRejecting(false); //실패시 거절 버튼 다시 활성화
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
        <button
          className="custom-btn btn-11"
          onClick={matchingAccept}
          disabled={isAccepting || acceptSuccess}
        >
          수락
        </button>
        <button
          className="custom-btn btn-11"
          onClick={matchingReject}
          disabled={isRejecting || rejectSuccess}
        >
          거절
        </button>
      </div>
      <MatchingTab />
      <Tab />
    </>
  );
}

export default FriendRequestPage;
