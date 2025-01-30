import NavMilestone from "../NavMilestoneItem/NavMilestone";
import styles from "./NavMilestoneList.module.css";

const NavMilestoneList = () => {
    return (
        <div className={styles.navTabs}>
            <a href="#" className={`${styles.navTab} ${styles.active}`}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Overview
            </a>

            <div className={styles.navSectionTitle}>Milestones</div>
            <NavMilestone
                name={"Design and Planning"}
                completed={true}
            ></NavMilestone>
            <NavMilestone name={"Frontend "} completed={true}></NavMilestone>
            <NavMilestone name={"Backend"} completed={false}></NavMilestone>
            <NavMilestone
                name={"Testing Deployment"}
                completed={false}
            ></NavMilestone>
        </div>
    );
};

export default NavMilestoneList;
