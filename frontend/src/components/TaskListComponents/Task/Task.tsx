import { IoSettingsOutline } from "react-icons/io5";
import styles from "./Task.module.css";

const Task = () => {
    return (
        <div className={styles.taskItem}>
            <input type="checkbox" className={styles.taskCheckbox} />
            <div className={styles.taskContent}>
                <div className={styles.taskTitle}>Update documentation</div>
                <div className={styles.taskDescription}>
                    Update API documentation with new endpoints
                </div>
            </div>
            <div className={styles.taskMeta}>
                <span className={styles.taskDueDate}>Due in 3 days</span>
                <span
                    className={`${styles.taskPriority} ${styles.priorityLow}`}
                >
                    Low
                </span>
            </div>
            <IoSettingsOutline className={styles.icon}></IoSettingsOutline>
        </div>
    );
};

export default Task;
