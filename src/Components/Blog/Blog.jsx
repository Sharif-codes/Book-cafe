
import { useEffect, useState } from "react";
import BlogCards from '../BlogCard/BlogCards';
import PropTypes from 'prop-types';

const Blog = ({handleBookmark, handleMarkASRead}) => {
    const [blogs, setBlogs]= useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))

    },[])
   
    return (
        <div className="md: w-2/3">
            {
                blogs.map(blog=> <BlogCards key={blog.id} blog={blog}
                     handleBookmark={handleBookmark} 
                     handleMarkASRead={handleMarkASRead}></BlogCards>)
            }
        </div>
    );
};
Blog.propTypes={
    handleBookmark: PropTypes.func.isRequired,
    handleMarkASRead: PropTypes.func
        
    }

export default Blog;