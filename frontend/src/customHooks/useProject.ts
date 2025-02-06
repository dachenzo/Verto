import { useEffect, useState } from "react";
import { Project } from "./useProjects";
import apiClient from "../services/apiClient";

const useProject = (projectId: number) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        const controller = new AbortController();
        setError(null);
        setLoading(true);

        apiClient
            .get<Project>(`project/${projectId}`)
            .then((res) => setProject(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);
    return { project, loading, error };
};

export default useProject;
