import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import MyPage from "./screen/MyPage";
import FriendRequestPage from "./screen/FriendRequestPage";
import FriendListPage from "./screen/FriendListPage";
import ClubPage from "./screen/ClubPage";
import MainPage from "./screen/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Main/:id" element={<MainPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/ClubPage" element={<ClubPage />} />
        <Route path="/FriendListPage" element={<FriendListPage />} />
        <Route path="/FriendRequestPage" element={<FriendRequestPage />} />

        {/* <Route path="/MyPage" element={<MyPage />} />
         */}
      </Routes>
    </>
  );
}

export default App;
