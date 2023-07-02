import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '../Context/toastify-context';
const exploreContext = createContext();

const ExploreProvider = ({ children }) => {
    const [explorePost, setExplorePost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { notifySuccess, notifyError } = useToast();


    // show all post 
    const getExplorePost = async () => {
        try {
            const { data } = await axios.get('/api/posts')
            setExplorePost(data.posts)
            setIsLoading(false)
        }
        catch (error) {
            notifyError(error)
        }
    }
    useEffect(() => {
        getExplorePost();
    }, []);


    // upload new-post;
    const NewPost = async (post) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.post(
                `/api/posts`,
                { postData: post },
                { headers: { authorization: token } }
            );
            setExplorePost(data.posts);
            notifySuccess("post added");
        } catch (error) {
            notifyError(error)
        }
        setExplorePost([post, ...explorePost]);

    };

    // Edit post
    const EditPost = async (post, postId) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.post(
                `/api/posts/edit/${postId}`,
                { postData: post },
                {
                    headers: { authorization: token },
                }
            );
            setExplorePost(data.posts);
        } catch (err) {
            console.log(err);
        }
    };

    //Delee Post
    const DeletePost = async (postId) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.delete(`/api/posts/${postId}`, {
                headers: { authorization: token },
            });

            setExplorePost(data.posts);

        } catch (err) {
            console.log(err);
            
        }
    };
    return (
        <exploreContext.Provider value={{DeletePost, EditPost, NewPost, explorePost, isLoading, getExplorePost }}>
            {children}
        </exploreContext.Provider>
    )
};
const useExplore = () => useContext(exploreContext);
export { useExplore, ExploreProvider };