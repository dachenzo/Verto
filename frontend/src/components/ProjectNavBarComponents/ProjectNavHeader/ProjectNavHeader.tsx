import styles from "./ProjectNavHeader.module.css";

const ProjectNavHeader = () => {
    return (
        <div className={styles.navHeader}>
            <div className={styles.navProjectTitle}>Website Redesign</div>
            <div className={styles.navProjectSubtitle}>
                <div
                    className={`${styles.priorityBadge} ${styles.priorityHigh}`}
                ></div>
                Marketing •
                <span
                    className={`${styles.projectStatus} ${styles.statusActive}`}
                >
                    Active
                </span>
            </div>
        </div>
    );
};

export default ProjectNavHeader;
