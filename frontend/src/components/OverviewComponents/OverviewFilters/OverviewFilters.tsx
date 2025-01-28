import styles from "./OverviewFilters.module.css";

const OverviewFilters = () => {
    return (
        <div className={styles.filters}>
            <button className={`${styles.filterPill} ${styles.active}`}>
                All Projects
            </button>
            <button className={styles.filterPill}>Active</button>
            <button className={styles.filterPill}>In Review</button>
            <button className={styles.filterPill}>Completed</button>
        </div>
    );
};

export default OverviewFilters;
