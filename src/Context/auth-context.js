import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState('');
    const [detail, setDetail] = useState('');
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    const dummyUser = {
        username: "@abhishek",
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
                console.log("Login Successfully");
            }
            if (data) {
                navigate('/')
            }
        }
        catch (err) {
            console.log(err);
            if (err.response.status === 404) {
                console.log("User not found");
            }
            else if (err.response.status === 401) {
                console.log("Invalid Credential");
            }
        }
    };

    //Signup API//
    

    // Logout function//
    const userLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    };


    // useEffect(() => {
    //     let token = localStorage.getItem("socialvibes");
    //     if (token) {
    //         setUserToken(token);
    //         setDetail(JSON.parse(localStorage.getItem("foundUser")));

    //     }
    // }, [userToken]);

  

    return (
        <authContext.Provider value={{ userLogout, userToken, detail, loginHandler, LoginDataHandler, userDetails, applyDummyData }}>
            {children}
        </authContext.Provider>
    )
}
const useAuth = () => useContext(authContext)
export { useAuth, AuthProvider }