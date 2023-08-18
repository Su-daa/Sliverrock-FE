import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginData } from "../app/store.js";

function MainPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  let params = id.split("$");
  let datas = {
    accessToken: params[0],
    refreshToken: params[1],
    userId: params[2],
  };

  let loginData = useSelector((state) => state.loginData);

  useEffect(() => {
    dispatch(setLoginData(datas)); // dispatch 호출
  }, []); // 빈 배열을 넣어서 컴포넌트가 마운트될 때만 실행되도록 설정
  // 상태 변경을 감지하는 다른 useEffect 추가
  useEffect(() => {
    if (loginData.accessToken) {
      // 상태가 변경되었을 때만 navigate 호출
      navigate("/home");
    }
  }, [loginData.accessToken]);

  return (
    <>
      <p>accessToken : {datas.accessToken}</p>
      <p>refreshToken : {datas.refreshToken}</p>
      <p>userId : {datas.userId}</p>
    </>
  );
}

export default MainPage;
