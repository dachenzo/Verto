import { useState } from "react";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const login = (email: string, password: string) => {
        setLoading(true);
        setError(null);

        apiClient
            .post("/auth/login", { email, password })
            .then((res) => {
                console.log(res);
                setLoading(false);
                setIsLoggedIn(true);
                navigate("/main");
            })
            .catch((err) => {
                console.log(err);
                setError(err);
                setLoading(false);
            });
    };

    return { login, error, loading };
};

export default useLogin;
