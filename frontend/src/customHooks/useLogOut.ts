import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

const useLogOut = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const logOut = () => {
        setLoading(true);
        setError(null);

        apiClient
            .post("/auth/logout")
            .then(() => {
                setLoading(false);
                setIsLoggedIn(false);
                navigate("/");
            })
            .catch((err) => {
                setError(err);
                console.log(err);
                setLoading(false);
            });
    };

    return { logOut, error, loading };
};

export default useLogOut;
