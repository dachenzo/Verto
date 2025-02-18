import styles from "./CompleteMilestoneBtn.module.css";
import useFormUpdate from "../../customHooks/useFormUpdate";
import { useParams } from "react-router-dom";
import { useSelectedProject } from "../../contexts/SelectedProjectContext";

interface Props {
    isComplete: boolean;
}
const CompleteMilestoneBtn = ({ isComplete }: Props) => {
    const { milestoneId, projectId } = useParams();
    const { loadProjectDetails } = useSelectedProject();
    const url = `milestone/${milestoneId}`;
    const handleClick = async () => {
        await submit({ completed: !isComplete });
        await loadProjectDetails(parseInt(projectId as string));
    };

    const { submit } = useFormUpdate(url);
    return (
        <button
            className={`${styles.milestoneButton} ${
                isComplete ? styles.completed : ""
            }`}
            onClick={handleClick}
        >
            {!isComplete ? (
                <svg className={styles.icon} viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            ) : (
                <svg className={styles.icon} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
            )}
            {isComplete ? "Completed" : "Complete "}
        </button>
    );
};

export default CompleteMilestoneBtn;
