import { useState } from "react";
import apiClient from "../services/apiClient";

const useFormsSubmit = <T>(url: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const submit = async (data: T) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiClient.post<T>(url, data);
            return response.data;
        } catch (err: any) {
            setError(err.message);
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, submit };
};

export default useFormsSubmit;
