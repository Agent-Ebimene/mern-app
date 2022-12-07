import "./topBar.css";
import personIcon from "../../assets/images/person-icon.jpg";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="fa-brands fa-square-facebook topIcon"></i>
        <i class="fa-brands fa-twitter topIcon"></i>
        <i class="fa-brands fa-pinterest topIcon"></i>
        <i class="fa-brands fa-instagram topIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={personIcon} alt="user icon" className="topImg"></img>
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
