import styles from "./TaskListFilters.module.css";

const TaskListFilters = () => {
    return (
        <div className={styles.filters}>
            <div className={styles.filterGroup}>
                <label>Status:</label>
                <select className={styles.select}>
                    <option>All</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select>
            </div>
            <div className={styles.filterGroup}>
                <label>Priority:</label>
                <select className={styles.select}>
                    <option>All</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
            <div className={styles.filterGroup}>
                <label>Due Date:</label>
                <select className={styles.select}>
                    <option>All</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                </select>
            </div>
        </div>
    );
};

export default TaskListFilters;
