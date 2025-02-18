import { useSelectedProject } from "../../../contexts/SelectedProjectContext";
import styles from "./ProjectCardContainer.module.css";

interface Props {
    children: React.ReactNode;
    navigate: () => void;
    projectId: number;
}

const ProjectCardContainer = ({ children, navigate, projectId }: Props) => {
    const { loadProjectDetails } = useSelectedProject();

    const handleClick = () => {
        loadProjectDetails(projectId);
        navigate();
    };

    return (
        <div className={styles.projectCard} onClick={handleClick}>
            {children}
        </div>
    );
};

export default ProjectCardContainer;
