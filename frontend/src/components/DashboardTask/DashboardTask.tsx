import { IoSettingsOutline } from "react-icons/io5";
import styles from "./DashboardTask.module.css";

const DashboardTask = () => {
    return (
        <div className={styles.card}>
            <p>Create a Task Management app</p>
            <IoSettingsOutline></IoSettingsOutline>
        </div>
    );
};

export default DashboardTask;
