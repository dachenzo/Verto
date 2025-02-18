import { useParams } from "react-router-dom";
import { useSelectedProject } from "../../../contexts/SelectedProjectContext";
import MilestoneTaskItem from "../MilestoneTaskItem/MilestoneTaskItem";
import styles from "./MilestoneTaskList.module.css";

const MilestoneTaskList = () => {
    const { milestoneId } = useParams();
    const { selectedProject } = useSelectedProject();
    const milestone =
        selectedProject?.milestones && milestoneId
            ? selectedProject.milestones.find(
                  (pu) => pu.milestoneId === parseInt(milestoneId)
              )
            : undefined;

    return (
        <div className={styles.list}>
            {milestone
                ? milestone.tasks.map((ta) => (
                      <MilestoneTaskItem
                          description={ta.description}
                          title={ta.title}
                          isCompleted={ta.completed}
                          date={ta.deadline}
                          key={ta.taskId}
                      />
                  ))
                : ""}
        </div>
    );
};
export default MilestoneTaskList;
