import styles from "./ProjectDetailHeader.module.css";

import NewMilestoneBtn from "../NewMilestoneBtn/NewMilestoneBtn";
import EditProjectBtn from "../EditProjectBtn/EditProjectBtn";
import DeleteBtn from "../../DeleteBtn/DeleteBtn";
import { useSelectedProject } from "../../../contexts/SelectedProjectContext";
import { useProjects } from "../../../contexts/ProjectsContext";
import { useNavigate } from "react-router-dom";

const ProjectDetailHeader = () => {
    const { selectedProject } = useSelectedProject();
    const { loadAllProjects } = useProjects();
    const navigate = useNavigate();
    const onDeleteSuccess = async () => {
        await loadAllProjects();
        navigate("/main");
    };
    return (
        <header className={styles.header}>
            <div className={styles.titleSection}>
                <h1>
                    <div
                        className={`${styles.priorityBadge} ${styles.priorityHigh}`}
                    ></div>
                    {selectedProject?.title}
                </h1>
                <div className={styles.subtitle}>
                    Marketing •{" "}
                    <span
                        className={`${styles.projectStatus} ${styles.statusActive}`}
                    >
                        {selectedProject?.completed ? "Completed" : "Active"}
                    </span>
                </div>
            </div>
            <div className={styles.actionButtons}>
                <DeleteBtn
                    url={`/project/${selectedProject?.projectId}`}
                    onSuccess={onDeleteSuccess}
                ></DeleteBtn>
                <EditProjectBtn></EditProjectBtn>
                <NewMilestoneBtn></NewMilestoneBtn>
            </div>
        </header>
    );
};

export default ProjectDetailHeader;
