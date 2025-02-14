import { createContext, useContext, useState } from "react";
import { Project } from "../customHooks/useProjects";
import apiClient from "../services/apiClient";

export interface SelectedProjectContextType {
    selectedProject: Project | null;
    loadProjectDetails: (projectId: number) => Promise<void>;
    loading: boolean;
    error: string | null;
}

export const SelectedProjectContext = createContext<
    SelectedProjectContextType | undefined
>(undefined);

export const SelectedProjectProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const loadProjectDetails = async (projectId: number) => {
        setError(null);
        setLoading(true);

        apiClient
            .get<Project>(`/project/${projectId}`)
            .then((res) => {
                console.log(` fetched project: ${res.data}`);
                setSelectedProject(res.data);
            })
            .catch((err) => {
                console.log(`Errror fetching project: ${err.message}`);
                setError(err.message);
            })
            .finally(() => setLoading(false));
        console.log(selectedProject);
    };

    return (
        <SelectedProjectContext.Provider
            value={{
                selectedProject,
                loadProjectDetails,
                loading,
                error,
            }}
        >
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProject = (): SelectedProjectContextType => {
    const context = useContext(SelectedProjectContext);

    if (!context) {
        throw new Error(
            "useSelectedProject must be used within a SelectedProjectProvider"
        );
    }

    return context;
};
