import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useExplore } from './explore-context';
const favouriteContext = createContext();
const FavouriteProvider = ({ children }) => {
    const [favouritePost, setFavouritePost] = useState([]);
    const { getExplorePost } = useExplore();

    // add favourite post
    const addFavouritePost = async (postId) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.post(`/api/posts/like/${postId}`, {}, {
                headers: { authorization: token },

            });
            getExplorePost()
            console.log('add',data.posts)
            setFavouritePost(data.posts)
        }
        catch (error) {
            console.log(error);
        }
    };

    // dislike post
    const dislikePost = async (postId) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await axios.post(` /api/posts/dislike/${postId}`,{}, {
                headers: { authorization: token },
            });
            getExplorePost()
            setFavouritePost(data.posts)
        }
        catch (error) {
          alert(error)
        }
    }

    return (
        <favouriteContext.Provider value={{ dislikePost, addFavouritePost, favouritePost }}>
            {children}
        </favouriteContext.Provider>
    )
};
const useFavourite = () => useContext(favouriteContext);
export { useFavourite, FavouriteProvider };