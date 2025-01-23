import { useForm } from "react-hook-form";
import styles from "./TaskForms.module.css";

interface Props {
    cancelEdit: (x: boolean) => void;
}

interface EditCalendarTaskData {
    title?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    priority?: "LOW" | "HIGH" | "MEDIUM";
}

const EditCalendarTaskForm = ({ cancelEdit }: Props) => {
    const { register, handleSubmit } = useForm<EditCalendarTaskData>();
    const submit = (data: EditCalendarTaskData) => {
        console.log(data);
    };
    return (
        <form id="editCalendarTaskForm" onSubmit={handleSubmit(submit)}>
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
                <label className={styles.formLabel} htmlFor="taskStartDate">
                    Start Date
                </label>
                <input
                    type="datetime-local"
                    id="taskStartDate"
                    className={styles.formInput}
                    {...register("startDate")}
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
                    {...register("endDate")}
                />
            </div>
            <div className={styles.modalFooter}>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.btnPrimary} `}
                    onClick={() => cancelEdit(true)}
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

export default EditCalendarTaskForm;
