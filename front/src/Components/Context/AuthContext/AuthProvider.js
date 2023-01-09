import axios from "axios";
import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {

    const user = JSON.parse(sessionStorage.getItem('user') ) || [];
    const [auth, setAuth] = useState(user);
    if (new Date().getTime() - auth.time < 180000) {
        axios.interceptors.request.use((config) => {
            config.headers = { Authorization: "Bearer " + auth.data?.token }
            return config;
        })
    }
    console.log(auth);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider