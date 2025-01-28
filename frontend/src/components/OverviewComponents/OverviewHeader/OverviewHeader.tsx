import NewProjectBtn from "../NewProjectBtn/NewProjectBtn";
import SearchLink from "../SearchLink/SearchLink";
import TaskSwitch from "../TaskSwitch/TaskSwitch";
import styles from "./OverviewHeader.module.css";

const OverviewHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.titleSection}>
                <h1>Projects Overview</h1>
                <div className={styles.subtitle}>
                    Track and manage your active projects
                </div>
            </div>
            <div className={styles.actionButtons}>
                <SearchLink></SearchLink>
                <TaskSwitch></TaskSwitch>
                <NewProjectBtn></NewProjectBtn>
            </div>
        </header>
    );
};

export default OverviewHeader;
