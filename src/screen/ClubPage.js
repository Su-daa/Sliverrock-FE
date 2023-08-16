import { useSelector } from "react-redux";
import Club from "../components/Club.js";
import "../styles/ClubPage.css";
import Tab from "../components/Tab.js";
import Carousel from "react-material-ui-carousel";

function ClubPage() {
  const club = useSelector((state) => state.club);
  const clubItems = club.map((clubItem, index) => (
    <Club key={index} club={clubItem} />
  ));

  return (
    <>
      <h1 className="title">{`${club.length}개의 동호회가 있어요`}</h1>
      <Carousel>{clubItems}</Carousel>
      <Tab />
    </>
  );
}

export default ClubPage;
