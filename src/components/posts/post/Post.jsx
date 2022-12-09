import "./post.css";
import postIcon from "../../../assets/images/blog-img-3.jpg";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={postIcon} alt=""></img>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">The pleasure of making your own money</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        The post is about the research of the US scientists about the social
        behaviours of humans under different circumstances. The post is about
        the research of the US scientists about the social behaviours of humans
        under different circumstances The post is about the research of the US
        scientists about the social behaviours of humans under different
        circumstances The post is about the research of the US scientists about
        the social behaviours of humans under different circumstances
      </p>
    </div>
  );
};

export default Post;
