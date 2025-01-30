import ProjectStatisticCard from "../ProjectStatisticCard/ProjectStatisticCard";
import styles from "./ProjectDetailStatistics.module.css";

const ProjectDetailStatistics = () => {
    return (
        <div className={styles.analyticsGrid}>
            <ProjectStatisticCard
                statName={"Total Tasks"}
                value={"20"}
            ></ProjectStatisticCard>
            <ProjectStatisticCard
                statName={"Total Completed"}
                value={"10"}
            ></ProjectStatisticCard>
            <ProjectStatisticCard
                statName={"In Progress"}
                value={"8"}
            ></ProjectStatisticCard>
            <ProjectStatisticCard
                statName={"To Do"}
                value={"2"}
            ></ProjectStatisticCard>
        </div>
    );
};

export default ProjectDetailStatistics;
