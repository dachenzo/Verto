import ProjectDetailMilestone from "../ProjectDetailMilestone/ProjectDetailMilestone";
import styles from "./ProjectDetailMilestoneList.module.css";

const ProjectDetailMilestoneList = () => {
    return (
        <div className={styles.milestoneList}>
            <ProjectDetailMilestone isCompleted={true}></ProjectDetailMilestone>
            <ProjectDetailMilestone isCompleted={true}></ProjectDetailMilestone>
            <ProjectDetailMilestone
                isCompleted={false}
            ></ProjectDetailMilestone>
            <ProjectDetailMilestone
                isCompleted={false}
            ></ProjectDetailMilestone>
            <ProjectDetailMilestone
                isCompleted={false}
            ></ProjectDetailMilestone>
        </div>
    );
};

export default ProjectDetailMilestoneList;
