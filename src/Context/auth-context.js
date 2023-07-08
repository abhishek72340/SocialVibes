import { createContext, useContext, useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../Context/toastify-context';
const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState('');
    const [detail, setDetail] = useState();
   
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });

    //Signup-State//
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useToast();

    //Login Function//
    const dummyUser = {
        username: "abhishek",
        password: "abhishek123",
    };

    const applyDummyData = (e) => {
        e.preventDefault();
        setUserDetails(dummyUser)
    };

    const LoginDataHandler = (e) => {
        let name = e.target.name
        let val = e.target.value
        setUserDetails({ ...userDetails, [name]: val })
    };

    //Login API//
    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            let { data, status } = await axios.post("/api/auth/login", {
                username: userDetails.username,
                password: userDetails.password,
            });

            if (status === 200) {
                localStorage.setItem(
                    "token",
                    JSON.stringify(data.encodedToken)
                );
                localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
                setUserToken(data.encodedToken);
                setDetail(data.foundUser);
              
                
            }
            if (data) {
                navigate('welcome')
               
            }
        }
        catch (err) {
            console.log(err);
            if (err.response.status === 404) {
                notifyError("User not found");
            }
            else if (err.response.status === 401) {
                notifyError("Invalid Credential");
            }
        }
    };

    //Signup Function//
    let name;
    let value;
    const signupInputChange = (e) => {
        name = e.target.name
        value = e.target.value
        setUserData({ ...userData, [name]: value })
    };

    //Signup API//
    const signupHandler = async (e) => {
        e.preventDefault();
        if (userData.password === userData.confirmPassword) {
            try {
                const { data } = await axios.post('/api/auth/signup', {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    username: userData.username,
                    password: userData.password,
                    confirmPassword: userData.confirmPassword,

                });
                console.log(data)
                localStorage.setItem('token', JSON.stringify(data.encodedToken))
                localStorage.setItem('foundUser', JSON.stringify(data.createdUser))

                if (data) {
                    navigate('/welcome')
                   
                }
            }
            catch (error) {
                notifyError(error)
            }

        } else {
            notifyError('password does not match')
        }
    }

    // Logout function//
    const userLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
        notifySuccess('logout successfully')
    };

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            setUserToken(token);
            setUserDetails(JSON.parse(localStorage.getItem("foundUser")));

        }
    },[userToken]);

//     useEffect(() => {
//         const token = localStorage.getItem('encodedToken')
//         if (token) {
//             const foundUser = JSON.parse(localStorage.getItem('foundUser'))
//             setUserDetails(foundUser);
//     }
// },[])
    return (
        <authContext.Provider value={{setUserDetails, userData, signupInputChange, signupHandler, userLogout, userToken, detail, loginHandler, LoginDataHandler, userDetails, applyDummyData }}>
            {children}
        </authContext.Provider>
    )
}
const useAuth = () => useContext(authContext)
export { useAuth, AuthProvider }