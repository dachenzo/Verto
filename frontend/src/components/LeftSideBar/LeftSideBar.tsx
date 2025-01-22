import styles from "./LeftSideBar.module.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { Pages } from "../../App";
import NewTaskBtn from "../NewTaskBtn/NewTaskBtn";

interface Props {
    setPage: (c: Pages) => void;
    page: Pages;
}

const LeftSideBar = ({ setPage, page }: Props) => {
    const pageChangeHandler = (c: Pages) => {
        return setPage(c);
    };

    return (
        <div className={styles.leftsidebardiv}>
            <h1 className={styles.sitename}>Verto</h1>
            <NewTaskBtn></NewTaskBtn>
            <nav className={styles.navLinks}>
                <div
                    onClick={() => pageChangeHandler("D")}
                    className={`${styles.linkcontainer} ${
                        page == "D" ? styles.active : ""
                    }`}
                >
                    <LuLayoutDashboard
                        className={styles.icon}
                    ></LuLayoutDashboard>
                    <span>Dashboard</span>
                </div>
                <div
                    onClick={() => pageChangeHandler("C")}
                    className={`${styles.linkcontainer} ${
                        page == "C" ? styles.active : ""
                    }`}
                >
                    <IoPersonOutline className={styles.icon}></IoPersonOutline>
                    <span>Calendar</span>
                </div>
                <div
                    onClick={() => pageChangeHandler("T")}
                    className={`${styles.linkcontainer} ${
                        page == "T" ? styles.active : ""
                    }`}
                >
                    <GoTasklist className={styles.icon}></GoTasklist>
                    <span>Tasklist</span>
                </div>
                <div
                    onClick={() => pageChangeHandler("S")}
                    className={styles.linkcontainer}
                >
                    <IoSettingsOutline
                        className={styles.icon}
                    ></IoSettingsOutline>
                    <span>Settings</span>
                </div>
                <div
                    onClick={() => pageChangeHandler("P")}
                    className={styles.linkcontainer}
                >
                    <IoPersonOutline className={styles.icon}></IoPersonOutline>
                    <span>Profile</span>
                </div>
            </nav>
        </div>
    );
};

export default LeftSideBar;
