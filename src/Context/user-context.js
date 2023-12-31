import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '../Context/toastify-context';
import { useAuth } from '../Context/auth-context'
import axios from 'axios';
const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const { userDetails, setUserDetails } = useAuth();
    const { notifySuccess } = useToast();
    console.log(user)

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
             await axios.post(
                `/api/users/edit`,
                { userData: userData },
                {
                    headers: { authorization: token },
                }
            );
            notifySuccess("profile updated successfully");
            getUser();
                  } catch (err) {
            alert(err);
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