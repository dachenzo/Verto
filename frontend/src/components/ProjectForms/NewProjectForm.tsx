import styles from "./ProjectForms.module.css";
import sharedStyles from "../OverviewComponents/sharedStyles.module.css";
import Overlay from "../TaskForms/Overlay/Overlay";

interface Props {
    closeModal: () => void;
}

const NewProjectForm = ({ closeModal }: Props) => {
    return (
        <Overlay title={"Create New Project"}>
            <form className={styles.formCard}>
                <div className={styles.formSection}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Project Name</label>
                        <input
                            type="text"
                            className={styles.formInput}
                            placeholder="Enter project name"
                        />
                        <div className={styles.formHint}>
                            Choose a clear and descriptive name for your project
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            Project Description
                        </label>
                        <textarea
                            className={styles.formInput}
                            placeholder="Enter project description"
                        ></textarea>
                        <div className={styles.formHint}>
                            Provide a brief overview of the project's goals and
                            objectives
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Due Date</label>
                        <input type="date" className={styles.formInput} />
                    </div>

                    <div className={styles.formGroup}>
                        <label
                            className={styles.formLabel}
                            htmlFor="ProjectPriority"
                        >
                            Priority
                        </label>
                        <select
                            id="ProjectPriority"
                            className={styles.formSelect}
                        >
                            <option value=""></option>
                            <option value="LOW">Low Priority</option>
                            <option value="MEDIUM">Medium Priority</option>
                            <option value="HIGH">High Priority</option>
                        </select>
                    </div>
                </div>

                <div className={styles.formActions}>
                    <button
                        type="button"
                        className={`${sharedStyles.btn} ${sharedStyles.btnSecondary}`}
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={`${sharedStyles.btn} ${sharedStyles.btnPrimary}`}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </svg>
                        Create Project
                    </button>
                </div>
            </form>
        </Overlay>
    );
};

export default NewProjectForm;
