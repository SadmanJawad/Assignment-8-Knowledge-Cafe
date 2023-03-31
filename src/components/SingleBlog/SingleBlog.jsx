import React from "react";
import "./SingleBlog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog }) => {
  console.log(blog);
  return (
    <div className="blog-card">
      <img src={blog.cardImage} />

      <div className="blog-info">
        {/* child 1 */}
        <div className="blog-profile">
          <img src={blog.personPic} alt="" />
          <div className="profile-name">
            <h4 className="name-person">{blog.authorName}</h4>
            <p className="date">{blog.publishedDate}</p>
          </div>
        </div>
        {/* child 2 */}
        <div className="minRead">
          <p>{blog.timeToRead} min read</p>
          <FontAwesomeIcon className="icon" icon={faBookmark} />
        </div>
      </div>
      <h1>{blog.cardTitle}</h1>
      <p>{blog.hashTags}</p>
      <button className="btn-markAsRead">Mark as read</button>
    </div>
  );
};

export default SingleBlog;
