import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useToast } from '../Context/toastify-context';
import { useExplore } from './explore-context';
const favouriteContext = createContext();
const FavouriteProvider = ({ children }) => {
    const [favouritePost, setFavouritePost] = useState([]);
    const { notifyError, notifySuccess } = useToast()
    const { getExplorePost } = useExplore();

    // add favourite post
    const addFavouritePost = async (postId) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.post(`/api/posts/like/${postId}`, {}, {
                headers: { authorization: token },

            });
            getExplorePost()
            setFavouritePost(data.posts)
        }
        catch (error) {
            console.log(error);
        }
    };

    // delete favourite post
    const deleteFavouritePost = async (postId) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.delete(` /api/posts/dislike/${postId}`,{}, {
                headers: { authorization: token },
            });
            getExplorePost()
            // console.log(data.posts)
            setFavouritePost(data.posts)
        }
        catch (error) {
            notifyError(error)
        }
    }

    return (
        <favouriteContext.Provider value={{ deleteFavouritePost, addFavouritePost, favouritePost }}>
            {children}
        </favouriteContext.Provider>
    )
};
const useFavourite = () => useContext(favouriteContext);
export { useFavourite, FavouriteProvider };