import BookmarkItem from "../bookmarkItem/BookmarkItem";
import PropTypes from 'prop-types';


const Bookmark = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md: w-1/3 ml-5 bg-gray-200 p-4 rounded-xl">
            
            <p className="text-3xl font-bold bg-blue-400 p-3 rounded-xl mb-2">Bookmark: <span className="">{bookmarks.length}</span> </p>
            <div className="bg-green-400 p-3 rounded-xl mb-2">
                <h2 className="text-2xl">Reading Time: {readingTime} min</h2>
            </div>
            {
                bookmarks.map(item=> <BookmarkItem key={item.id} item={item}></BookmarkItem>)
            }
        </div>
    );
};
Bookmark.propTypes={
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}

export default Bookmark;