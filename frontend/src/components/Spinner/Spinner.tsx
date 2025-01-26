import styles from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}>
                <div className={styles.loaderRing}></div>
                <div className={styles.loaderRing}></div>
                <div className={styles.loaderText}>Loading...</div>
            </div>
        </div>
    );
};

export default Spinner;
