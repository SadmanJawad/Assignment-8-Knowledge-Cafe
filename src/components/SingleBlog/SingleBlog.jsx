import React from "react";
import "./SingleBlog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

const SingleBlog = (props) => {

    const {cardImage,personPic,authorName,publishedDate,timeToRead,cardTitle,hashTags} = props.blog;

//   console.log('blog', blog);
  const handleMarkAsRead = props.handleMarkAsRead;
  const handleAddToSidebar = props.handleAddToSidebar;

 

  return (
    <div className="blog-card">
      <img src={cardImage} />

      <div className="blog-info">
        {/* child 1 */}
        <div className="blog-profile">
          <img src={personPic} alt="" />
          <div className="profile-name">
            <h4 className="name-person">{authorName}</h4>
            <p className="date">{publishedDate}</p>
          </div>
        </div>
        {/* child 2 */}
        <div className="minRead">
          <p>{timeToRead} min read</p>
          <FontAwesomeIcon onClick={() => handleAddToSidebar(props.blog)} className="icon" icon={faBookmark} /> <ToastContainer></ToastContainer>
          {/* <p>{timeToRead} min reads <button onClick={() => handleAddToSidebar(props.blog) } ><FontAwesomeIcon icon={faBookmark} /> <ToastContainer></ToastContainer></button></p> */}

        </div>
      </div>
      <h1>{cardTitle}</h1>
      <p>{hashTags}</p>
      {/* <button onClick={() => handleMarkAsRead(props)} className="btn-markAsRead">Mark as read</button> */}
      <button onClick={() => handleMarkAsRead(props.blog)} className="btn-markAsRead">Mark as read</button>
      
    </div>
  );
};

export default SingleBlog;
