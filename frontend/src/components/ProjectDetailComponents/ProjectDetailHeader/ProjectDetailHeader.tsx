import styles from "./ProjectDetailHeader.module.css";
import sharedStyles from "../../OverviewComponents/sharedStyles.module.css";

const ProjectDetailHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.titleSection}>
                <h1>
                    <div
                        className={`${styles.priorityBadge} ${styles.priorityHigh}`}
                    ></div>
                    Website Redesign
                </h1>
                <div className={styles.subtitle}>
                    Marketing •{" "}
                    <span
                        className={`${styles.projectStatus} ${styles.statusActive}`}
                    >
                        Active
                    </span>
                </div>
            </div>
            <div className={styles.actionButtons}>
                <button className={`${styles.btn} ${styles.btnOutline}`}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Edit
                </button>
                <button
                    className={`${sharedStyles.btn} ${sharedStyles.btnPrimary}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    New Milestone
                </button>
            </div>
        </header>
    );
};

export default ProjectDetailHeader;
