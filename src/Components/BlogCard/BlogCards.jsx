import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';

const BlogCards = ({blog,handleBookmark, handleMarkASRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags}= blog;
    
    return (
        <div className='mb-10 space-y-5'>
            <img onClick={()=>handleBookmark(blog)} className='w-full' src={cover} alt="" />
            <div className="flex justify-between mt-2">
                <div className="flex">
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-2'>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='inline'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(blog)} className='ml-2 text-lg text-blue-600 hover:shadow-md'><FaBookmark></FaBookmark> </button>
                </div>
            </div>

            <p className='mt-2'>{title}</p>
            <p>
                {
                    hashtags.map((hash, idx)=><span key={idx}>#{hash} </span>)

                }
            </p>
            <button className='text-purple-800 underline' onClick={()=>handleMarkASRead(reading_time,id)} href="">Mark as Read</button>
            
        </div>
    );
};
BlogCards.propTypes ={
    blog: PropTypes.object.isRequired,
    handleMarkASRead: PropTypes.func,
    handleBookmark: PropTypes.func
}
export default BlogCards;