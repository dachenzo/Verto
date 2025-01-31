import styles from "./MilestoneTaskItem.module.css";

const MilestoneTaskItem = () => {
    return (
        <div className={styles.taskItem}>
            <div className={styles.taskContent}>
                <div className={styles.taskTitle}>
                    Design system documentation
                    <span
                        className={`${styles.taskStatus} ${styles.inProgress}`}
                    >
                        In Progress
                    </span>
                </div>
                <div className={styles.taskDescription}>
                    Create comprehensive documentation for the new design system
                    including color palette, typography, and component
                    guidelines.
                </div>
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
                        Feb 5, 2025
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilestoneTaskItem;
