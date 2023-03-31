import { useEffect, useState } from "react";
import "./Blogs.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import Sidebar from "../Sidebar/SideBar";

// toast install
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
const [sidebar, setSidebar] = useState([])
  const [time, setTime] = useState([0]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddToSidebar = (blog) => {
// react toast added
    if(sidebar.includes(blog)){
        toast.error("Item already bookmarked!");
    }
        const newSidebar = [...sidebar, blog];
        setSidebar(newSidebar);    
};


  const handleMarkAsRead = (blog) => {
    // console.log(blog);
    const newTime = parseInt(blog.timeToRead);
    setTime(newTime + parseInt(time));
  };

  return (
    <div className="main-container">
      <div className="blog-item">
        {blogs.map((blog) => (
          <SingleBlog
            blog={blog}
            handleMarkAsRead={handleMarkAsRead}
            handleAddToSidebar={handleAddToSidebar}
          ></SingleBlog>
        ))}
      </div>

      {/* <div className="bookmark">
        <h1>Spent time on read: {time} </h1>
        <h2>Bookmarked Blogs : </h2>
      </div> */}

      <div>
        <Sidebar sidebar={sidebar} time={time}>
      
        </Sidebar>
      </div>
    </div>
  );
};

export default Blogs;
