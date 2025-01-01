import styles from "./DashHeader.module.css";

const DashHeader = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome back, Michael</h1>
            <p>Stay on top your tasks and watch your productivity soar</p>
        </div>
    );
};

export default DashHeader;
