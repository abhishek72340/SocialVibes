import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '../Context/toastify-context';
import axios from 'axios';
const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const { notifyError } = useToast();

    const findUser = (username) => {
      
        return user.find(prof => prof.username === username)
    }

    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/users')
            setUser(data.users);
        }
        catch (error) {
            notifyError(error)
        }
    }
    useEffect(() => {
        getUser();
    })
    return (
        <userContext.Provider value={{ user,getUser,findUser }}>
            {children}
        </userContext.Provider>
    )
}
const useUser = () => useContext(userContext)
export { useUser, UserProvider }