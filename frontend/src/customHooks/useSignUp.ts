import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

const useSignUp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const signUp = (email: string, password: string, username: string) => {
        setLoading(true);
        setError(null);

        apiClient
            .post("/auth/register", {
                username,
                email,
                password,
            })
            .then((res) => {
                console.log(res);
                setLoading(false);
                setIsLoggedIn(true);
                navigate("/main");
            })
            .catch((err) => {
                setError(err);
                console.log(err.message);
                setLoading(false);
            });
    };
    return { loading, error, signUp };
};

export default useSignUp;
