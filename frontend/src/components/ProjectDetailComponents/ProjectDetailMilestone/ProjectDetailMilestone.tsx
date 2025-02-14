import styles from "./ProjectDetailMilestone.module.css";

interface Props {
    isCompleted: boolean;
    title: string;
    description: string;
}
const ProjectDetailMilestone = ({ isCompleted, title, description }: Props) => {
    return (
        <div className={styles.milestone}>
            <div
                className={`${styles.milestoneCheckbox}  ${
                    isCompleted ? styles.completed : ""
                }`}
            ></div>
            <div className={styles.milestoneContent}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectDetailMilestone;
