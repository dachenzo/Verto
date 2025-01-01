import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    tasks: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    console.log(data, error);

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((res) => setData(res.data.tasks))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => controller.abort();
    }, []); //dont forget the dependencies!!! and the clean up function, also make sure to call abort

    return { data, error };
};

export default useData;
