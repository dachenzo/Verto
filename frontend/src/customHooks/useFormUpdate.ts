import { useState } from "react";
import apiClient from "../services/apiClient";

const useFormUpdate = <T>(url: string) => {
    const [updateLoading, setUpdateLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const submit = async (data: T) => {
        setUpdateLoading(true);
        setError(null);
        await apiClient
            .patch<T>(url, data)
            .then(() => {})
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => setUpdateLoading(false));
    };

    return { updateLoading, error, submit };
};

export default useFormUpdate;
