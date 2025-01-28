import styles from "./ProjectCardHeader.module.css";

const ProjectCardHeader = () => {
    return (
        <div className={styles.projectHeader}>
            <div>
                <div className={`${styles.priorityBadge} ${styles.high}`}></div>
                <div className={styles.projectTitle}>Website Redesign</div>
                <div className={styles.projectSubtitle}>Marketing</div>
            </div>
            <span className={`${styles.projectStatus} ${styles.statusActive}`}>
                Active
            </span>
        </div>
    );
};

export default ProjectCardHeader;
