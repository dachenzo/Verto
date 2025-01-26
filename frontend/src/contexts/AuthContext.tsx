import { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (status: boolean) => void;
    loading: boolean;
}

interface Props {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    loading: true,
});
export const AuthProvider = ({ children }: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            apiClient
                .get("/auth/me")
                .then((data) => {
                    if (data.data === "NOT_LOGGED_IN") {
                        setIsLoggedIn(false);
                        setLoading(false);
                    } else {
                        setIsLoggedIn(true);
                        setLoading(false);
                    }
                })
                .catch((err) => {
                    setIsLoggedIn(false);
                    console.log(err);
                    setLoading(false);
                });
        };

        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => useContext(AuthContext);

export { useAuth };
