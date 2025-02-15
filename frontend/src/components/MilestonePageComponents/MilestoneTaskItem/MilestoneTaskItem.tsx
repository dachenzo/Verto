import styles from "./MilestoneTaskItem.module.css";

interface Props {
    title: string;
    description: string;
    isCompleted: boolean;
    date: Date;
}
const MilestoneTaskItem = ({
    title,
    description,
    isCompleted,
    date,
}: Props) => {
    return (
        <div className={styles.taskItem}>
            <div className={styles.taskContent}>
                <div className={styles.taskTitle}>
                    {title}
                    <span
                        className={`${styles.taskStatus} ${styles.inProgress}`}
                    >
                        {!isCompleted ? "In Progress" : "Done"}
                    </span>
                </div>
                <div className={styles.taskDescription}>{description}</div>
                <div className={styles.taskMeta}>
                    <div className={styles.taskDue}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                            ></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {date.toString()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilestoneTaskItem;
