import styles from "./NavProjectItem.module.css";

const NavProjectItem = () => {
    return (
        <div className={styles.projectItem}>
            <div className={styles.projectColor}></div>
            <div className={styles.projectName}>Website Redesign</div>
        </div>
    );
};

export default NavProjectItem;
