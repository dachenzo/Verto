import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export interface User {
    userId: number;

    email: string;

    username: string;
}

const useUserProfile = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<User>();

    useEffect(() => {
        const controller = new AbortController();
        setError(null);
        setLoading(true);
        apiClient
            .get<User>("/user")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
        return () => controller.abort();
    }, []);

    return { data, loading, error };
};

export default useUserProfile;
