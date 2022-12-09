import "./singlePost.css";
import singlePostImg from "../../assets/images/blog-img-4.jpg";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img alt="" src={singlePostImg}></img>
        <h1 classname="singlePostTitle">
          Solving Algorithms on a white board marker
          <div className="singlePostEdit">
            <i className=" singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Agent Ebimene</b>
          </span>
          <span className="singlePostDate">
            Date: <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDesc">
          Solving an algorithm with your white marker board shows better your
          thought process and problem solving. It gives the privilege to break
          the solutin to how the computer actually handles the task. Solving an
          algorithm with your white marker board shows better your thought
          process and problem solving. It gives the privilege to break the
          solutin to how the computer actually handles the task. Solving an
          algorithm with your white marker board shows better your thought
          process and problem solving. It gives the privilege to break the
          solutin to how the computer actually handles the task. Solving an
          algorithm with your white marker board shows better your thought
          process and problem solving. It gives the privilege to break the
          solutin to how the computer actually handles the task. Solving an
          algorithm with your white marker board shows better your thought
          process and problem solving. It gives the privilege to break the
          solutin to how the computer actually handles the task.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
