import styles from "./TaskForms.module.css";

interface Props {
    setIsNewTaskForm: (x: boolean) => void;
}

const NewCalendarTaskForm = ({ setIsNewTaskForm }: Props) => {
    return (
        <form id="newCalendarTaskForm">
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskTitle">
                    Task Title
                </label>
                <input
                    type="text"
                    id="taskTitle"
                    className={styles.formInput}
                    placeholder="Enter task title"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskDescription">
                    Description
                </label>
                <textarea
                    id="taskDescription"
                    className={styles.formInput}
                    placeholder="Enter task description"
                ></textarea>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskPriority">
                    Priority
                </label>
                <select id="taskPriority" className="form-select" required>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskStartDate">
                    Start Date
                </label>
                <input
                    type="datetime-local"
                    id="taskStartDate"
                    className={styles.formInput}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskEndDate">
                    Start Date
                </label>
                <input
                    type="datetime-local"
                    id="taskEndDate"
                    className={styles.formInput}
                    required
                />
            </div>
            <div className={styles.modalFooter}>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.btnPrimary} `}
                    onClick={() => setIsNewTaskForm(false)}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className={`${styles.btn} ${styles.btnSecondary}`}
                >
                    Create Task
                </button>
            </div>
        </form>
    );
};

export default NewCalendarTaskForm;
