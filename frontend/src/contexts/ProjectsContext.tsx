import { createContext, useContext, useEffect, useState } from "react";
import { Project } from "../customHooks/interfaces";
import apiClient from "../services/apiClient";

export interface ProjectsContextType {
    projects: Project[] | null;
    loadAllProjects: () => Promise<void>;
    loading: boolean;
    error: string | null;
}

export const ProjectsContext = createContext<ProjectsContextType | undefined>(
    undefined
);

export const ProjectsProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const loadAllProjects = async () => {
        setError(null);
        setLoading(true);

        try {
            const response = await apiClient.get<Project[]>("/project/");

            setProjects([...response.data]); // Ensure a new reference
        } catch (err: any) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAllProjects();
    }, []);

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                loadAllProjects,
                loading,
                error,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjectsContext = (): ProjectsContextType => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error(
            "useProjects must be used within a SelectedProjectProvider"
        );
    }

    return context;
};
