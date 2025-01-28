import styles from "./ProjectList.module.css";
import sharedStyles from "../SharedStyles.module.css";
import NavProjectItem from "../NavProjectItem/NavProjectItem";

const ProjectList = () => {
    return (
        <div className={sharedStyles.navSection}>
            <div className={sharedStyles.title}>Projects</div>
            <div className={styles.ProjectList}>
                <NavProjectItem></NavProjectItem>
                <NavProjectItem></NavProjectItem>
                <NavProjectItem></NavProjectItem>
            </div>
        </div>
    );
};

export default ProjectList;
