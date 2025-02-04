import { useState } from "react";
import apiClient from "../services/apiClient";

const useFormsSubmit = <T>(url: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const submit = (data: T) => {
        setLoading(true);
        setError(null);
        apiClient
            .post<T>(url, data)
            .then(() => {})
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    };

    return { loading, error, submit };
};

export default useFormsSubmit;
