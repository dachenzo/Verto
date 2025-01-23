import { useForm } from "react-hook-form";
import styles from "./TaskForms.module.css";

interface Props {
    cancelEdit: (x: boolean) => void;
}

interface EditDeadlineTaskData {
    title?: string;
    description?: string;
    priority?: "LOW" | "HIGH" | "MEDIUM";
    deadline?: Date;
}

const EditDeadlineTaskForm = ({ cancelEdit }: Props) => {
    const { register, handleSubmit } = useForm<EditDeadlineTaskData>();
    const submit = (data: EditDeadlineTaskData) => {
        console.log(data);
    };
    return (
        <form id="editDeadlineTaskForm" onSubmit={handleSubmit(submit)}>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskTitle">
                    Task Title
                </label>
                <input
                    type="text"
                    id="taskTitle"
                    className={styles.formInput}
                    placeholder="Enter task title"
                    {...register("title")}
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
                    {...register("description")}
                ></textarea>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskPriority">
                    Priority
                </label>
                <select
                    id="taskPriority"
                    className="form-select"
                    {...register("priority")}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskDueDate">
                    Due Date
                </label>
                <input
                    type="datetime-local"
                    id="taskDueDate"
                    className={styles.formInput}
                    {...register("deadline")}
                />
            </div>

            <div className={styles.modalFooter}>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.btnPrimary} `}
                    onClick={() => cancelEdit(false)}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className={`${styles.btn} ${styles.btnSecondary}`}
                >
                    Apply
                </button>
            </div>
        </form>
    );
};

export default EditDeadlineTaskForm;
