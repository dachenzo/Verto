import { useSelectedProject } from "../../../contexts/ProjectContext";
import styles from "./ProjectNavHeader.module.css";

const ProjectNavHeader = () => {
    const { selectedProject } = useSelectedProject();
    return (
        <div className={styles.navHeader}>
            <div className={styles.navProjectTitle}>
                {selectedProject?.title}
            </div>
            <div className={styles.navProjectSubtitle}>
                <div
                    className={`${styles.priorityBadge} ${styles.priorityHigh}`}
                ></div>
                Marketing •
                <span
                    className={`${styles.projectStatus} ${styles.statusActive}`}
                >
                    {selectedProject?.completed ? "Completed" : "Active"}
                </span>
            </div>
        </div>
    );
};

export default ProjectNavHeader;
