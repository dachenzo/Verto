import { useSelectedProject } from "../../../contexts/SelectedProjectContext";
import ProgressBar, { progressCalculator } from "../../ProgressBar/ProgressBar";
import styles from "./ProjectDetailCardHeader.module.css";

const ProjectDetailCardHeader = () => {
    const { selectedProject } = useSelectedProject();
    const percent = progressCalculator(selectedProject?.milestones);
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{selectedProject?.title}</h2>
            <p>{selectedProject?.description}</p>

            <div className={styles.progressSection}>
                <ProgressBar percent={percent}></ProgressBar>
            </div>
        </div>
    );
};

export default ProjectDetailCardHeader;
