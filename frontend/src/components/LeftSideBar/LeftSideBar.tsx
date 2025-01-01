import styles from "./LeftSideBar.module.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const LeftSideBar = () => {
    return (
        <div className={styles.leftsidebardiv}>
            <h1 className={styles.sitename}>Verto</h1>
            <div className={styles.linkcontainer}>
                <LuLayoutDashboard className={styles.icon}></LuLayoutDashboard>
                <span>Dashboard</span>
            </div>
            <div className={styles.linkcontainer}>
                <GoTasklist className={styles.icon}></GoTasklist>
                <span>Tasklist</span>
            </div>
            <div className={styles.linkcontainer}>
                <IoSettingsOutline className={styles.icon}></IoSettingsOutline>
                <span>Settings</span>
            </div>
            <div className={styles.linkcontainer}>
                <IoPersonOutline className={styles.icon}></IoPersonOutline>
                <span>Profile</span>
            </div>
        </div>
    );
};

export default LeftSideBar;
