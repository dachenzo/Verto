import styles from "./ProjectList.module.css";
import sharedStyles from "../SharedStyles.module.css";
import NavProjectItem from "../NavProjectItem/NavProjectItem";
import { Project } from "../../../customHooks/useProjects";

interface Props {
    projects: Project[] | undefined;
}

const ProjectList = ({ projects }: Props) => {
    return (
        <div className={sharedStyles.navSection}>
            <div className={sharedStyles.title}>Projects</div>
            <div className={styles.ProjectList}>
                {projects?.map((project) => (
                    <NavProjectItem project={project}></NavProjectItem>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
