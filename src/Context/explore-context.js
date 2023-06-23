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
            alert(error)
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
setExplorePost([post,...explorePost])
    };
    return (
        <exploreContext.Provider value={{ NewPost, explorePost, isLoading }}>
            {children}
        </exploreContext.Provider>
    )
};
const useExplore = () => useContext(exploreContext);
export { useExplore, ExploreProvider };