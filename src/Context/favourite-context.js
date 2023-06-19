import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useToast } from '../Context/toastify-context';
const favouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
    const [favouritePost, setFavouritePost] = useState([]);
    const { notifyError, notifySuccess } = useToast()

    // add favourite post
    const addFavouritePost = async (postId) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.post(`/api/posts/like/${postId}`, {}, {
                headers: { authorization: token },
            });
            console.log(data);
            setFavouritePost(data.posts)
        }
        catch (error) {

        }
    };

    // delete favourite post
    const deleteFavouritePost = async (postId) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.post(` /api/posts/dislike/${postId}`, {}, {
                headers: { authorization: token }
            })
            setFavouritePost(data.posts)
            notifySuccess('delete successfull')
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