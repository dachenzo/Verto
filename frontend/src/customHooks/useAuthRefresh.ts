import { useEffect } from "react";
import apiClient from "../services/apiClient";

const useAuthRefresh = () => {
    useEffect(() => {
        const refreshInterval = 14 * 60 * 1000;
        const refreshToken = async () => {
            apiClient.post("auth/refresh").catch((err) => {
                window.location.href = "/";
                console.log(err.message);
            });
        };

        const intervalId = setInterval(refreshToken, refreshInterval);

        return () => clearInterval(intervalId);
    }, []);
};

export default useAuthRefresh;
