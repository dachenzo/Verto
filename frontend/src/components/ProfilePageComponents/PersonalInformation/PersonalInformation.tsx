import styles from "./PersonalInformation.module.css";

const PersonalInformation = () => {
    return (
        <>
            <h2 className={styles.title}>Personal Information</h2>
            <div className={styles.grid}>
                <div className={styles.item}>
                    <div className={styles.label}>Full Name</div>
                    <div className={styles.value}>John Michael Doe</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.label}>Email</div>
                    <div className={styles.value}>john.doe@company.com</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.label}>Phone</div>
                    <div className={styles.value}>+1 (555) 123-4567</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.label}>Location</div>
                    <div className={styles.value}>New York, USA</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.label}>Department</div>
                    <div className={styles.value}>Project Management</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.label}>Join Date</div>
                    <div className={styles.value}>January 15, 2023</div>
                </div>
            </div>
        </>
    );
};

export default PersonalInformation;
