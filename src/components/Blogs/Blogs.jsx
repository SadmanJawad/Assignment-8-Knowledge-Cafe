import { useEffect, useState } from 'react';
import './Blogs.css'
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch("fakeData.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
   
    return (
        <div className='main-container'>
            <div className='blog-item'>
            {
            blogs.map((blog)=>(
               <SingleBlog blog={blog}></SingleBlog>
            ))
           }
            </div>

            <div className="bookmark">
                <h2>bookmark list come here</h2>
            </div> 


          
        </div>
    );
};

export default Blogs;
