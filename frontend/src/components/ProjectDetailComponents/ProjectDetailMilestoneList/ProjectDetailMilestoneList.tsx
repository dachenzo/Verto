import { useSelectedProject } from "../../../contexts/SelectedProjectContext";
import ProjectDetailMilestone from "../ProjectDetailMilestone/ProjectDetailMilestone";
import styles from "./ProjectDetailMilestoneList.module.css";

const ProjectDetailMilestoneList = () => {
    const { selectedProject } = useSelectedProject();
    return (
        <div className={styles.milestoneList}>
            {selectedProject?.milestones
                ? selectedProject.milestones.map((milestone, index) => (
                      <ProjectDetailMilestone
                          isCompleted={milestone.completed}
                          title={milestone.title}
                          description={milestone.description}
                          key={index}
                      ></ProjectDetailMilestone>
                  ))
                : ""}
        </div>
    );
};

export default ProjectDetailMilestoneList;
