import "../styles/Profile.css";

function Profile(props) {
  return (
    <div className="box-container">
      <div className="profile-box">
        <div className="profile-img-box">
          <img
            className="profile-img"
            src={props.user.getS3Res.imgUrl}
            alt="profile-img"
          ></img>
        </div>
        <div className="profile-info">
          <h4 className="profile-info-text">
            이름 {props.user.nickname} ({props.user.gender})
          </h4>
          <h4 className="profile-info-text">나이 {props.user.birth}년생</h4>
          <h4 className="profile-info-text">지역 {props.user.region}</h4>
          <h4 className="profile-info-text">소개 {props.user.introduce}</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
