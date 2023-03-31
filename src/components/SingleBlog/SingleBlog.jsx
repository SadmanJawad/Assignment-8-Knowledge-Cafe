import React from "react";
import "./SingleBlog.css";
const SingleBlog = ({ blog }) => {
  console.log(blog);
  return (
    <div className="blog-card">
      <img src={blog.cardImage} />

      <div className="blog-info">
        <div className="blog-profile">
          <img src={blog.personPic} alt="" />
          <div className="profile-name">
            <h4 className="name-person">{blog.authorName}</h4>
            <p className="date">{blog.publishedDate}</p>
          </div>
        </div>
        <div>
          <p>{blog.timeToRead} min read</p>
        </div>
      </div>
      <h1>{blog.cardTitle}</h1>
      <p>{blog.hashTags}</p>
      <button>Mark as read</button>
      
    </div>
  );
};

export default SingleBlog;
