import styles from "./ActivityLogItem.module.css";

const ActivityLogItem = () => {
    return (
        <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
                <div className={styles.avatar}>JD</div>
            </div>
            <div className={styles.activityContent}>
                <div className={styles.activityMeta}>
                    <span className={styles.activityUser}>John Doe</span>
                    <span className={styles.activityTime}>9:45 AM</span>
                </div>
                <div className={styles.activityDescription}>
                    Updated project settings
                    <span
                        className={`${styles.activityType} ${styles.typeUpdate}`}
                    >
                        Updated
                    </span>
                </div>
                <a href="#" className={styles.activityItemLink}>
                    Project Settings
                </a>
            </div>
        </div>
    );
};

export default ActivityLogItem;
