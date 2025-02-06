import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export interface Task {
    taskId: number;
    title: string;
    description: string;
}

export interface Milestone {
    milestoneId: number;
    title: string;
    description?: string;
    orderIndex: number;
    tasks: Task[];
}

export interface Project {
    projectId: number;
    title: string;
    description?: string;
    priority?: "HIGH" | "LOW" | "MEDIUM";
    completed: boolean;
    dueDate?: string;
    createdAt: Date;
    updatedAt: Date;
    milestones?: Milestone[];
}

const useProjects = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<Project[]>();

    useEffect(() => {
        const controller = new AbortController();
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
        return () => controller.abort();
    }, []);

    return { data, loading, error };
};

export default useProjects;
