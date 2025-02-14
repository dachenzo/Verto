import { useEffect } from "react";
import apiClient from "../services/apiClient";

const useAuthRefresh = () => {
    useEffect(() => {
        const refreshInterval = 2 * 60 * 1000;
        const refreshToken = async () => {
            apiClient
                .post(
                    "/auth/refresh",
                    {},
                    {
                        headers: {
                            "Cache-Control":
                                "no-store, no-cache, must-revalidate, proxy-revalidate",
                        },
                    }
                )
                .catch((err) => {
                    console.log(err.message);
                });
        };

        const intervalId = setInterval(refreshToken, refreshInterval);

        return () => clearInterval(intervalId);
    }, []);
};

export default useAuthRefresh;
