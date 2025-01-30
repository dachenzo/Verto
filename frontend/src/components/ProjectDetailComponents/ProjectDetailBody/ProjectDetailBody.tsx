import ProjectDetailCard from "../ProjectDetailCard/ProjectDetailCard";
import ProjectDetailTaskCard from "../ProjectDetailTaskCard/ProjectDetailTaskCard";
import styles from "./ProjectDetailBody.module.css";

const ProjectDetailBody = () => {
    return (
        <div className={styles.card}>
            <ProjectDetailCard></ProjectDetailCard>
            <ProjectDetailTaskCard></ProjectDetailTaskCard>
        </div>
    );
};

export default ProjectDetailBody;
