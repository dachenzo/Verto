import styles from "./ProjectList.module.css";
import sharedStyles from "../SharedStyles.module.css";
import NavProjectItem from "../NavProjectItem/NavProjectItem";
import { Project } from "../../../customHooks/interfaces";
import Spinner from "../../Spinner/Spinner";

interface Props {
    projects: Project[] | null;
    loading: boolean;
}

const ProjectList = ({ projects, loading }: Props) => {
    return (
        <div className={sharedStyles.navSection}>
            <div className={sharedStyles.title}>Projects</div>
            <div className={styles.ProjectList}>
                {loading ? <Spinner height={"3"} width={"3"}></Spinner> : ""}
                {projects?.map((project) => (
                    <NavProjectItem
                        key={project.projectId}
                        project={project}
                    ></NavProjectItem>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
