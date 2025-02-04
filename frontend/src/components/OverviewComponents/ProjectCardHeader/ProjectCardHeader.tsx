import styles from "./ProjectCardHeader.module.css";

interface Props {
    title: string;
    completed: boolean;
}

const ProjectCardHeader = ({ title, completed }: Props) => {
    return (
        <div className={styles.projectHeader}>
            <div>
                <div className={`${styles.priorityBadge} ${styles.high}`}></div>
                <div className={styles.projectTitle}>{title}</div>
                <div className={styles.projectSubtitle}>Marketing</div>
            </div>
            <span className={`${styles.projectStatus} ${styles.statusActive}`}>
                {completed ? "completed" : "Active"}
            </span>
        </div>
    );
};

export default ProjectCardHeader;
