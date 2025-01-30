import GenericWhiteCard from "../../GenericWhiteCard/GenericWhiteCard";
import styles from "./ProjectDetailTaskCard.module.css";
import sharedStyles from "../../OverviewComponents//sharedStyles.module.css";
import ProjectDetailTaskList from "../ProjectDetailTaskList/ProjectDetailTaskList";

const ProjectDetailTaskCard = () => {
    return (
        <GenericWhiteCard>
            <div className={styles.taskHeader}>
                <h2 className={styles.cardTitle}>Tasks</h2>
                <button
                    className={`${sharedStyles.btn} ${sharedStyles.btnOutline}`}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M21 14l-9 5-9-5M21 8l-9 5-9-5 9-5 9 5z"></path>
                    </svg>
                    Sort by Milestone
                </button>
            </div>
            <ProjectDetailTaskList></ProjectDetailTaskList>
        </GenericWhiteCard>
    );
};

export default ProjectDetailTaskCard;
