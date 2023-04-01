import React from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    const {sidebar , time} = props;
  
    
    return (
        <div className='sidebar'>
            <div className='spent-time'>
                <h1>Spent time on read: {time} min</h1>
            </div>
            <div className='bookmark-container'>
                <h4>Bookmarked Blogs :{sidebar.length}</h4>
                {
                    sidebar.map(bar=><p>{bar.cardTitle}</p>)
                }
                
            </div>
        </div>
    );
};

export default Sidebar;