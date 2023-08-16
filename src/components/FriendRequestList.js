import "../styles/Profile.css";
import profileImg from "../styles/profile.jpg";

function FriendRequestList({ friendRequestList }) {
  return (
    <div className="box-container">
      {friendRequestList.map((request, index) => (
        <div className="profile-box" key={index}>
          <div className="profile-img-box">
            {/* <img
              className="profile-img"
              src={friendRequestList.getS3Res.imgUrl}
              alt="profile-img"
            /> */}
            <img className="profile-img" src={profileImg} alt="profile-img" />
          </div>
          <div className="profile-info">
            <h4 className="profile-info-text">이름: {request.nickname}</h4>
            <h4 className="profile-info-text">
              나이: {new Date().getFullYear() - parseInt(request.birth)}세
            </h4>
            <h4 className="profile-info-text">지역: {request.region}</h4>
            <h4>소개: {request.introduce}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendRequestList;
