import { IoSettingsOutline } from "react-icons/io5";
import styles from "./DashboardTask.module.css";

const DashboardTask = () => {
    return (
        <div className={styles.taskItem}>
            <input type="checkbox" className={styles.checkbox} />
            <div className={styles.taskContent}>
                <div className={styles.taskTitle}>My project presentation</div>
                <div className={styles.taskMeta}>
                    <div className={styles.timeSpan}>
                        <svg
                            className={styles.clockIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        10:00 AM - 11:30 AM
                    </div>
                    <span className={`${styles.priorityBadge}`}>
                        High Priority
                    </span>
                </div>
            </div>
            <IoSettingsOutline></IoSettingsOutline>
        </div>
    );
};

export default DashboardTask;
