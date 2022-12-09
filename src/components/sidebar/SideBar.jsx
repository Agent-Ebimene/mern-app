import "./sidebar.css";
import sidebarIcon from "../../assets/images/blog-img-1.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <article className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sidebarIcon} alt=""></img>
        <p>
          I am an Engineer with an intensive focus in philosophical thinking and
          Mathematics.I dedicated alot of time to understand Engineering
          Analysis
        </p>
      </article>
      <artcle className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sideList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </artcle>
      <article className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="fa-brands fa-square-facebook sidebarIcon"></i>
          <i class="fa-brands fa-twitter sidebarIcon"></i>
          <i class="fa-brands fa-pinterest sidebarIcon"></i>
          <i class="fa-brands fa-instagram sidebarIcon"></i>
        </div>
      </article>
    </div>
  );
};

export default SideBar;
