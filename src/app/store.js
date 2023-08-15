import { createSlice, configureStore } from "@reduxjs/toolkit";
import clubImgTennis from "../styles/club_tennis.jpg";
import clubImgBadminton from "../styles/club_badminton.jpg";
import clubImgMT from "../styles/club.jpg";

//근처 친구 목록(홈페이지)
let nearUserList = createSlice({
  name: "nearUserList",
  initialState: [
    {
      gender: "여성",
      nickname: "성원",
      birth: "2000",
      region: "서울시 강서구",
      introduce: "성원 만세",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },
  ],
  reducers: {
    setNearUserList: (state, action) => {
      const { gender, nickname, birth, region, introduce, getS3Res } =
        action.payload;
      state.gender = gender;
      state.nickname = nickname;
      state.birth = birth;
      state.region = region;
      state.introduce = introduce;
      state.getS3Res = getS3Res;
    },
  },
});

//친구 요청 목록
let friendRequestList = createSlice({
  name: "friendRequestList",
  initialState: [
    {
      gender: "여성",
      nickname: "성원",
      birth: "2000",
      region: "서울시 강서구",
      introduce: "성원 만세",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },

    {
      gender: "여성",
      nickname: "지원",
      birth: "1955",
      region: "서울시 마포구",
      introduce: "산책 갈사람",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },

    {
      gender: "남성",
      nickname: "근육맨",
      birth: "1960",
      region: "서울시 서초구",
      introduce: "3대 500임",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },
  ],
  reducers: {
    setFriendRequestList: (state, action) => {
      // 액션 페이로드에서 받은 유저 정보를 상태에 저장
      const { gender, nickname, birth, region, introduce, getS3Res } =
        action.payload;
      state.gender = gender;
      state.nickname = nickname;
      state.birth = birth;
      state.region = region;
      state.introduce = introduce;
      state.getS3Res = getS3Res;
    },
  },
});

//친구 목록
let friendList = createSlice({
  name: "friendList",
  initialState: [
    {
      nickname: "지원",
      birth: "1955",
      gender: "여성",
      introduce: "산책 갈사람",
      getS3Re: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },

    {
      nickname: "근육맨",
      birth: "1960",
      gender: "남성",
      introduce: "3대 500임",
      getS3Res: {
        imgUrl:
          "https://lsw-s3-bucket.s3.ap-northeast-2.amazonaws.com/9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
        fileName: "9ebafa89-528d-4f9d-b45f-ef3b44183a6f.png",
      },
    },
  ],
  reducers: {
    setFriendList: (state, action) => {
      const { nickname, birth, gender, introduce, getS3Res } = action.payload;
      state.nickname = nickname;
      state.birth = birth;
      state.gender = gender;
      state.introduce = introduce;
      state.getS3Res = getS3Res;
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
    },

    {
      name: "배드민턴 동호회",
      img: clubImgBadminton,
    },

    {
      name: "테니스 동호회",
      img: clubImgTennis,
    },
  ],
  reducers: {
    setClub: (state, action) => {
      const { name, img } = action.payload;
      // state.name = name;
      // state.img = img;
      state.push({ name, img });
    },
  },
});

export const { setNearUserList } = nearUserList.actions;
export const { setFriendRequestList } = friendRequestList.actions;
export const { setFriendList } = friendList.actions;
export const { setClub } = club.actions;

export default configureStore({
  reducer: {
    nearUserList: nearUserList.reducer,
    friendRequestList: friendRequestList.reducer,
    friendList: friendList.reducer,
    club: club.reducer,
  },
});
