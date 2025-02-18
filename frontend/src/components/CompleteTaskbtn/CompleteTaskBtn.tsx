import { useParams } from "react-router-dom";
import { useSelectedProject } from "../../contexts/SelectedProjectContext";
import styles from "./CompleteTaskBtn.module.css";
import useFormUpdate from "../../customHooks/useFormUpdate";

interface Props {
    isComplete: boolean;
    taskId: number;
}

const CompleteTaskBtn = ({ isComplete, taskId }: Props) => {
    const { projectId } = useParams();
    const { loadProjectDetails } = useSelectedProject();
    const url = `/tasks/${taskId}`;
    const { submit } = useFormUpdate(url);
    const handleClick = async () => {
        await submit({ completed: !isComplete, type: "DEADLINE" });
        await loadProjectDetails(parseInt(projectId as string));
    };
    return (
        <button
            onClick={handleClick}
            className={`${styles.checkButton} ${
                isComplete ? styles.completed : ""
            }`}
            aria-label="Complete task"
        >
            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </button>
    );
};

export default CompleteTaskBtn;
