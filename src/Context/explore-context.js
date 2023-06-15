import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const exploreContext = createContext();

const ExploreProvider = ({ children }) => {
    const [explorePost, setExplorePost] = useState([]);

    const getExplorePost = async () => {
        try {
            const { data } = await axios.get('/api/posts')
            setExplorePost(data.posts)

        }
        catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        getExplorePost();
    }, [])

    return (
        <exploreContext.Provider value={{ explorePost }}>
            {children}
        </exploreContext.Provider>
    )
};
const useExplore = () => useContext(exploreContext);
export { useExplore, ExploreProvider };