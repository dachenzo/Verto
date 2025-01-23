import { useForm } from "react-hook-form";
import styles from "./TaskForms.module.css";

interface DeadlineTaskData {
    title: string;
    description?: string;
    priority?: "LOW" | "HIGH" | "MEDIUM";
    deadline: Date;
}

interface Props {
    setIsNewTaskForm: (x: boolean) => void;
}
const NewDeadlineTaskForm = ({ setIsNewTaskForm }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DeadlineTaskData>();
    const submit = (data: DeadlineTaskData) => {
        console.log(data);
    };

    return (
        <>
            <form id="newDeadlineTaskForm" onSubmit={handleSubmit(submit)}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="taskTitle">
                        Task Title
                    </label>
                    <input
                        {...register("title", {
                            required: "Title is required",
                        })}
                        type="text"
                        id="taskTitle"
                        className={styles.formInput}
                        placeholder="Enter task title"
                    />
                    {errors.title && (
                        <p className={styles.e}>{errors.title.message}</p>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label
                        className={styles.formLabel}
                        htmlFor="taskDescription"
                    >
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
                        <option value=""></option>
                        <option value="LOW">Low Priority</option>
                        <option value="MEDIUM">Medium Priority</option>
                        <option value="HIGH">High Priority</option>
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
                        {...register("deadline", {
                            required: "Deadline is required",
                        })}
                    />
                    {errors.deadline && (
                        <p className={styles.e}>{errors.deadline.message}</p>
                    )}
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
        </>
    );
};

export default NewDeadlineTaskForm;
