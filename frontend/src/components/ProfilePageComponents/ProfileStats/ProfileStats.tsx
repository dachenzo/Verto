import styles from "./ProfileStats.module.css";

const ProfileStats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.items}>
                <div className={styles.value}>45</div>
                <div className={styles.label}>Total Tasks</div>
            </div>
            <div className={styles.items}>
                <div className={styles.value}>32</div>
                <div className={styles.label}>Completed</div>
            </div>
            <div className={styles.items}>
                <div className={styles.value}>13</div>
                <div className={styles.label}>In Progress</div>
            </div>
        </div>
    );
};

export default ProfileStats;
