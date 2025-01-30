import NavMilestoneList from "../NavMilestoneList/NavMilestoneList";
import ProjectNavHeader from "../ProjectNavHeader/ProjectNavHeader";
import styles from "./ProjectNavBar.module.css";

const ProjectNavBar = () => {
    return (
        <nav className={styles.projectNavBar}>
            <ProjectNavHeader></ProjectNavHeader>
            <NavMilestoneList></NavMilestoneList>
        </nav>
    );
};

export default ProjectNavBar;
