import styles from "./ProjectDetailMilestone.module.css";

interface Props {
    isCompleted: boolean;
}
const ProjectDetailMilestone = ({ isCompleted }: Props) => {
    return (
        <div className={styles.milestone}>
            <div
                className={`${styles.milestoneCheckbox}  ${
                    isCompleted ? styles.completed : ""
                }`}
            ></div>
            <div className={styles.milestoneContent}>
                <h3>Research & Planning</h3>
                <p>User research, competitor analysis, and site architecture</p>
            </div>
        </div>
    );
};

export default ProjectDetailMilestone;
