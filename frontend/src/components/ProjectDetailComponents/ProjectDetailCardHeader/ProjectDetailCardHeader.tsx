import { useSelectedProject } from "../../../contexts/SelectedProjectContext";
import ProgressBar from "../../ProgressBar/ProgressBar";
import styles from "./ProjectDetailCardHeader.module.css";

const ProjectDetailCardHeader = () => {
    const { selectedProject } = useSelectedProject();
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{selectedProject?.title}</h2>
            <p>{selectedProject?.description}</p>

            <div className={styles.progressSection}>
                <ProgressBar></ProgressBar>
            </div>
        </div>
    );
};

export default ProjectDetailCardHeader;
