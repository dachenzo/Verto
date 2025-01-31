import ProgressBar from "../../ProgressBar/ProgressBar";
import styles from "./MilestonePageHeader.module.css";

const MilestonePageHeader = () => {
    return (
        <div className={styles.milestoneHeader}>
            <div className={styles.milestoneTitle}>Design Phase</div>
            <ProgressBar></ProgressBar>
            {/* <div class="progress-section">
                <div class="progress-header">
                    <span>Milestone Progress</span>
                    <span>75%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 75%"></div>
                </div>
            </div> */}
            <div className={styles.milestoneMeta}>
                <div className={styles.metaItem}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Due: Feb 15, 2025
                </div>
                <div className={styles.metaItem}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    3 Team Members
                </div>
                {/* <div className={styles.metaItem}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    8 Comments
                </div> */}
            </div>
        </div>
    );
};

export default MilestonePageHeader;
