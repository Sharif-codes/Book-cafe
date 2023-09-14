
import { useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import Bookmark from './Components/bookmark/Bookmark'
import Header from './Components/header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  const [bookmarks, setBookmarks]= useState([])
  const [readingTime, setReadingTime]= useState(0)

  const handleBookmark= blog=>{
    const isExist= bookmarks.find(item=> item.id===blog.id)
    if(isExist){
      return alert('Already Bookmarked')
    }
    else{
      const newBookmark= [...bookmarks,blog]
    setBookmarks(newBookmark)
    }
    
   
  }
  const handleMarkASRead=(time,id)=>{
    if(readingTime>40)
    {
      return alert('Enough Reading, Go for Coffee!')
    }
    else{
      const newReadingTime= readingTime+time
    setReadingTime(newReadingTime)
    const remainingBookMarks= bookmarks.filter(item=> item.id!==id)
    setBookmarks(remainingBookMarks)
    }
     
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex md:justify-between p-5 max-w-7xl mx-auto'>
        <Blog handleBookmark={handleBookmark} handleMarkASRead={handleMarkASRead}></Blog>
        <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
