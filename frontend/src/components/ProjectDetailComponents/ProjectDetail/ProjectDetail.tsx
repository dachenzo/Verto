import ProjectDetailBody from "../ProjectDetailBody/ProjectDetailBody";
import ProjectDetailHeader from "../ProjectDetailHeader/ProjectDetailHeader";
import ProjectDetailStatistics from "../ProjectDetailStatistics/ProjectDetailStatistics";
import ReturnToMainBtn from "../ReturnToMainBtn/ReturnToMainBtn";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
    return (
        <div className={styles.mainContent}>
            <ReturnToMainBtn></ReturnToMainBtn>
            <ProjectDetailHeader></ProjectDetailHeader>
            <ProjectDetailStatistics></ProjectDetailStatistics>
            <ProjectDetailBody></ProjectDetailBody>
        </div>
    );
};

export default ProjectDetail;
