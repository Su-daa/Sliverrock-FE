import { createSlice, configureStore } from "@reduxjs/toolkit";
import clubImgTennis from "../styles/club_tennis.jpg";
import clubImgBadminton from "../styles/club_badminton.jpg";
import clubImgMT from "../styles/club.jpg";

let loginData = createSlice({
  name: "loginData",
  initialState: [
    {
      accessToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjM0MDI3MH0.Fi5LzkOfW3S1A8719qYRiDSoPw6KqmZDSZxCATXyyq0",
      refreshToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImV4cCI6MTY5MjM0MDI3MH0.Fi5LzkOfW3S1A8719qYRiDSoPw6KqmZDSZxCATXyyq0",
      userId: "4",
    },
  ],
  reducers: {
    setLoginData: (state, action) => {
      let now = action.payload;
      state = now;
      return state;
    },
  },
});

//근처 친구 목록(홈페이지)
let nearUserList = createSlice({
  name: "nearUserList",
  initialState: [],
  reducers: {
    setNearUserList: (state, action) => {
      let now = action.payload;
      state = now;
      return state;
    },
  },
});

//친구 요청 목록
let friendRequestList = createSlice({
  name: "friendRequestList",
  initialState: [],
  reducers: {
    setFriendRequestList: (state, action) => {
      let now = action.payload;
      state = now;
      return state;
    },
  },
});

//친구 목록
let friendList = createSlice({
  name: "friendList",
  initialState: [],
  reducers: {
    setFriendList: (state, action) => {
      let now = action.payload;
      state = now;
      // return action.payload;
      return state; // 새로운 배열을 생성하여 대체하도록 수정
    },
  },
});

//club page
let club = createSlice({
  name: "club",
  initialState: [
    {
      name: "산악 동호회",
      img: clubImgMT,
      phoneNum: "01012345554",
    },

    {
      name: "배드민턴 동호회",
      img: clubImgBadminton,
      phoneNum: "01020097857",
    },

    {
      name: "테니스 동호회",
      img: clubImgTennis,
      phoneNum: "01012345454",
    },
  ],
  reducers: {
    setClub: (state, action) => {
      const { name, img } = action.payload;
      state.push({ name, img });
    },
  },
});

export let { setLoginData } = loginData.actions;
export let { setNearUserList } = nearUserList.actions;
export const { setFriendRequestList } = friendRequestList.actions;
export const { setFriendList } = friendList.actions;
export const { setClub } = club.actions;

export default configureStore({
  reducer: {
    nearUserList: nearUserList.reducer,
    friendRequestList: friendRequestList.reducer,
    friendList: friendList.reducer,
    club: club.reducer,
    loginData: loginData.reducer,
  },
});
