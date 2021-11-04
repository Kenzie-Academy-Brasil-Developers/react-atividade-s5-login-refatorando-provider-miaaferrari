import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { History } from "history";

interface AuthProviderProps {
    children: ReactNode;
    // history: History;
}

interface User {
    email: string;
    password: string;
    token?: any;
}

interface AuthProviderData {
    authToken: string;
    signIn: (userData: User) => void;
    logout: () => void;
    history?: History;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({children}: AuthProviderProps) => {
    const history = useHistory();
    const [authToken, setAuthToken] = useState(localStorage.getItem("token") || "");

    const signIn = (userData: User) => {
        axios
            .post<User>("https://kenziehub.herokuapp.com/sessions", userData)
            .then((response) => {
                console.log(userData)
                localStorage.setItem("token", response.data.token);
                setAuthToken(response.data.token);
                history.push("/dashboard");
            })
            .catch((err) => console.log(err));
    };

    const logout = () => {
        history.push("/");
        localStorage.clear();
        setAuthToken("");
    };

    return (
        <AuthContext.Provider value={{authToken, signIn, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);