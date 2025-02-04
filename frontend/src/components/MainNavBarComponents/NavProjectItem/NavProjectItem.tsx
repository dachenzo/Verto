import { Project } from "../../../customHooks/useProjects";
import styles from "./NavProjectItem.module.css";

interface Props {
    project: Project;
}
const NavProjectItem = ({ project }: Props) => {
    return (
        <div className={styles.projectItem}>
            <div className={styles.projectColor}></div>
            <div className={styles.projectName}>{project.title}</div>
        </div>
    );
};

export default NavProjectItem;
