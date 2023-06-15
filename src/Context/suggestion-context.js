import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const suggestionContext = createContext();

const SuggestionProvider = ({ children }) => {
    const [suggestUser, setSuggestUser] = useState([]);

    const getUser = async () => {
        try {
            const {data} = await axios.get('/api/users')
            setSuggestUser(data.users)
            // console.log(response)
        }
        catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        getUser();
    }, [])

    return (
        <suggestionContext.Provider value={{ suggestUser }}>
            {children}
        </suggestionContext.Provider>
    )
};
const useSuggestion = () => useContext(suggestionContext);
export { useSuggestion, SuggestionProvider };