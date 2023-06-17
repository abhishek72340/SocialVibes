import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useToast } from '../Context/toastify-context';
const bookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
    const [bookmarkPost, setBookmarkPost] = useState([]);
    const { notifyError,notifySuccess } = useToast();
    const addBookmarkPost = async (postId) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.post(`/api/users/bookmark/${postId}`, {}, {
                headers: { authorization: token },
            });
            console.log(data)
            setBookmarkPost(data.bookmarks)
            notifySuccess('added successfully')
         
        }
        catch (error) {
            notifyError(error)
        }
    };

    return (
        <bookmarkContext.Provider value={{ bookmarkPost, addBookmarkPost }}>
            {children}
        </bookmarkContext.Provider>
    )
};
const useBookmark = () => useContext(bookmarkContext);
export { useBookmark, BookmarkProvider };