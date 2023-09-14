

const BookmarkItem = ({item}) => {
    const {title}= item
    return (
        <div className="bg-gray-400 mb-3 p-2 rounded-xl">
            <p>{title}</p>
        </div>
    );
};

export default BookmarkItem;