import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '../Context/toastify-context';
import { useAuth } from '../Context/auth-context'
import { useSuggestion } from './suggestion-context';
import axios from 'axios';
const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const { notifyError } = useToast();
    const { userDetails, setUserDetails } = useAuth();
    const { notifySuccess } = useToast();
    // const { getUser } = useSuggestion();


    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/users')
            setUser(data.users)
        }
        catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        getUser();
    }, [])


    const EditProfile = async (userData) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.post(
                `/api/users/edit`,
                { userData: userData },
                {
                    headers: { authorization: token },
                }
            );
            notifySuccess("profile updated successfully");
            user();
            console.log(data.user);
        } catch (err) {
            console.log(err);
        }
    };



    const isFollow = (username) => {
        return (
            userDetails?.followers?.some((user) => user?.username === username) ||
            userDetails?.following?.some((user) => user?.username === username)
        );
    };

    const findUser = (username) => {
        return user.find(prof => prof.username === username)
    }

    // const getUser = async () => {
    //     try {
    //         const { data } = await axios.get('/api/users')
    //         setUser(data.users);
    //     }
    //     catch (error) {
    //         notifyError(error)
    //     }
    // };
    const FollowUser = async (userId) => {
        const token = localStorage.getItem("token");

        try {
            const { data } = await axios.post(
                `/api/users/follow/${userId}`,
                {},
                {
                    headers: { authorization: token },
                }
            );
            getUser();
            setUserDetails(data.user);

            notifySuccess("followed user");
        } catch (error) {
            console.log(error);
        }
    };

    const UnfollowUser = async (userId) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.post(
                `/api/users/unfollow/${userId}`,
                {},
                {
                    headers: { authorization: token },
                }
            );
            getUser();
            setUserDetails(data.user);
            notifySuccess("unfollowed user ");
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <userContext.Provider value={{ UnfollowUser, FollowUser, EditProfile, user, getUser, findUser, isFollow }}>
            {children}
        </userContext.Provider>
    )
}
const useUser = () => useContext(userContext)
export { useUser, UserProvider }