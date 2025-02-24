import styles from "./ActivityLogHeader.module.css";

const ActivityLogHeader = () => {
    return (
        <div className={styles.logHeader}>
            <h2 className={styles.logTitle}>Activity History</h2>
            <div className={styles.logFilters}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>User:</label>
                    <select className={styles.filterSelect}>
                        <option value="all">All Users</option>
                        <option value="john" selected>
                            John Doe
                        </option>
                        <option value="alice">Alice Smith</option>
                        <option value="robert">Robert Johnson</option>
                    </select>
                </div>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Activity Type:</label>
                    <select className={styles.filterSelect}>
                        <option value="all">All Activities</option>
                        <option value="create">Created</option>
                        <option value="update">Updated</option>
                        <option value="delete">Deleted</option>
                        <option value="comment">Commented</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ActivityLogHeader;
