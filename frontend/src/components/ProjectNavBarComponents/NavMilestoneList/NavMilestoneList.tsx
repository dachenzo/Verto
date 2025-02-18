import { useState } from "react";
import { useSelectedProject } from "../../../contexts/SelectedProjectContext";
import NavMilestone from "../NavMilestoneItem/NavMilestone";
import styles from "./NavMilestoneList.module.css";
import { useNavigate } from "react-router-dom";

const NavMilestoneList = () => {
    const { selectedProject } = useSelectedProject();
    const [isActive, setIsActive] = useState<number | null>(null);
    const navigate = useNavigate();
    const handleOverviewClick = () => {
        setIsActive(null);
        navigate(`/project/${selectedProject?.projectId}`);
    };
    return (
        <div className={styles.navTabs}>
            <a
                href="#"
                className={`${styles.navTab} ${styles.active}`}
                onClick={handleOverviewClick}
            >
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
            {selectedProject?.milestones
                ? selectedProject.milestones.map((milestone, index) => (
                      <NavMilestone
                          key={index}
                          name={milestone.title}
                          completed={milestone.completed}
                          isActive={isActive}
                          setIsActive={setIsActive}
                          milestoneId={milestone.milestoneId}
                          projectId={selectedProject.projectId}
                      ></NavMilestone>
                  ))
                : ""}
        </div>
    );
};

export default NavMilestoneList;
