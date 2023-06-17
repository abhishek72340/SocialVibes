import { createContext, useContext,useState } from 'react';
import axios from 'axios';
const favouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
    const [favouritePost,setFavouritePost]=useState([]);

    const addFavouritePost=async(postId)=>{
        const token=localStorage.getItem('token')
        try{
const {data}=await axios.post(`/api/posts/like/${postId}`,{},{
    headers: { authorization: token },
});
console.log(data)
        }
        catch(error){

        }
    }

    return (
        <favouriteContext.Provider value={{favouritePost,addFavouritePost}}>
            {children}
        </favouriteContext.Provider>
    )
};
const useFavourite = () => useContext(favouriteContext);
export { useFavourite, FavouriteProvider };