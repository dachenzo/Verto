import MilestoneTaskItem from "../MilestoneTaskItem/MilestoneTaskItem";
import styles from "./MilestoneTaskList.module.css";

const MilestoneTaskList = () => {
    return (
        <div className={styles.list}>
            <MilestoneTaskItem></MilestoneTaskItem>
            <MilestoneTaskItem></MilestoneTaskItem>
            <MilestoneTaskItem></MilestoneTaskItem>
            <MilestoneTaskItem></MilestoneTaskItem>
        </div>
    );
};

export default MilestoneTaskList;
