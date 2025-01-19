import styles from "./EmailSettings.module.css";

const EmailSettings = () => {
    return (
        <>
            <div className={styles.group}>
                <h3 className={styles.title}>
                    Notify me about tasks with priority:
                </h3>
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxItem}>
                        <input type="checkbox" checked />
                        High Priority
                        <span className={`${styles.tag} ${styles.high}`}>
                            High
                        </span>
                    </label>
                    <label className={styles.checkboxItem}>
                        <input type="checkbox" checked />
                        Medium Priority
                        <span className={`${styles.tag} ${styles.med}`}>
                            Medium
                        </span>
                    </label>
                    <label className={styles.checkboxItem}>
                        <input type="checkbox" />
                        Low Priority
                        <span className={`${styles.tag} ${styles.low}`}>
                            Low
                        </span>
                    </label>
                </div>
            </div>
            <div className={styles.group}>
                <h3 className={styles.title}>
                    Send notification before event:
                </h3>
                <div className={styles.selectGroup}>
                    <select>
                        <option value="5">5 minutes before</option>
                        <option value="10">10 minutes before</option>
                        <option value="15" selected>
                            15 minutes before
                        </option>
                        <option value="30">30 minutes before</option>
                        <option value="60">1 hour before</option>
                        <option value="120">2 hours before</option>
                        <option value="1440">1 day before</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default EmailSettings;
