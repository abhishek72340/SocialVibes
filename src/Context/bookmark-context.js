import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const bookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
    const [bookmarkPost,setBookmarkPost]=useState([]);

    const addBookmarkPost = async(postId)=>{
        const token=localStorage.getItem('token')
        try{
            const {data}=await axios.post(`/api/users/bookmark/${postId}`,{},{
            headers:{authorization: token},
                   
        });
        console.log(data)
            setBookmarkPost(data.bookmarks)
        }
        catch(error){
            alert(error)
        }
    }
    return (
        <bookmarkContext.Provider value={{bookmarkPost,addBookmarkPost}}>
            {children}
        </bookmarkContext.Provider>
    )
};
const useBookmark = () => useContext(bookmarkContext);
export { useBookmark, BookmarkProvider };