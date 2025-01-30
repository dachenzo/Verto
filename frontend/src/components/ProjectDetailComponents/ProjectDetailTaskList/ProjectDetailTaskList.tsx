import ProjectDetailTaskItem from "../ProjectDetailTaskItem/ProjectDetailTaskItem";
import styles from "./ProjectDetailTaskList.module.css";

const ProjectDetailTaskList = () => {
    return (
        <div className={styles.taskList}>
            <ProjectDetailTaskItem></ProjectDetailTaskItem>
            <ProjectDetailTaskItem></ProjectDetailTaskItem>
            <ProjectDetailTaskItem></ProjectDetailTaskItem>
            <ProjectDetailTaskItem></ProjectDetailTaskItem>
        </div>
    );
};

export default ProjectDetailTaskList;
