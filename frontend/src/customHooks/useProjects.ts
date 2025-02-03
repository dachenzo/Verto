import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Project {
    projectId: number;

    title: string;

    description?: string;

    priority?: "HIGH" | "LOW" | "MEDIUM";

    completed: boolean;

    dueDate?: Date;

    createdAt: Date;

    updatedAt: Date;
}

const useProjects = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<Project[]>();

    useEffect(() => {
        setError(null);
        setLoading(true);
        apiClient
            .get<Project[]>("/project/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err.message);
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
};

export default useProjects;
