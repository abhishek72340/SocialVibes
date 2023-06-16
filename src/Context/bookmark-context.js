import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const bookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
    const [bookmarkPost,setBookmarkPost]=useState([]);

    const addBookmarkPost=async(bookmarkpost)=>{
        try{

            const {data}=await axios.post(`/api/users/bookmark/:${bookmarkpost}`,{
            // headers:{authorization: token},
                        
            })
            setBookmarkPost(data.bookmarks)
            console.log(data)
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