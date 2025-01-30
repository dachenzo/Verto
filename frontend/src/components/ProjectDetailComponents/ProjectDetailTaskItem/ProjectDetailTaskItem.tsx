import styles from "./ProjectDetailTaskItem.module.css";

const ProjectDetailTaskItem = () => {
    return (
        <div className={styles.taskItem}>
            <div className={`${styles.taskCheckbox} ${styles.completed}`}></div>
            <div className={styles.taskContent}>
                <h3>Conduct user interviews</h3>
                <div className={styles.taskMeta}>
                    <span className={styles.taskMilestone}>
                        Research & Planning
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailTaskItem;
