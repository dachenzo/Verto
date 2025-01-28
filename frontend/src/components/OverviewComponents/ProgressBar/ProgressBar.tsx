import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
    return (
        <div className={styles.projectProgress}>
            <div className={styles.progressHeader}>
                <span>Progress</span>
                <span>75%</span>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
