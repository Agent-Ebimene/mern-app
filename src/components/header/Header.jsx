import "./header.css";
import headerImage from "../../assets/images/person-icon.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={headerImage} alt=""></img>
    </div>
  );
};

export default Header;
