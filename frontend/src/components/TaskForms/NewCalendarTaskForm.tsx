import { useForm } from "react-hook-form";
import styles from "./TaskForms.module.css";

interface Props {
    setIsNewTaskForm: (x: boolean) => void;
}

interface CalendarTaskData {
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    priority?: "LOW" | "HIGH" | "MEDIUM";
}

const NewCalendarTaskForm = ({ setIsNewTaskForm }: Props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CalendarTaskData>();
    const submit = (data: CalendarTaskData) => {
        console.log(data);
    };

    const startDate = watch("startDate");
    return (
        <form id="newCalendarTaskForm" onSubmit={handleSubmit(submit)}>
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
                <label className={styles.formLabel} htmlFor="taskDescription">
                    Description
                </label>
                <textarea
                    {...register("description")}
                    id="taskDescription"
                    className={styles.formInput}
                    placeholder="Enter task description"
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
                <label className={styles.formLabel} htmlFor="taskStartDate">
                    Start Date
                </label>
                <input
                    type="datetime-local"
                    id="taskStartDate"
                    className={styles.formInput}
                    {...register("startDate", {
                        required: "Start date is required",
                        validate: {
                            futureDate: (value) => {
                                const now = new Date();
                                return (
                                    new Date(value) > now ||
                                    "Must be a future Date"
                                );
                            },
                        },
                    })}
                />
                {errors.startDate && (
                    <p className={styles.e}>{errors.startDate.message}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="taskEndDate">
                    End Date
                </label>
                <input
                    type="datetime-local"
                    id="taskEndDate"
                    className={styles.formInput}
                    {...register("endDate", {
                        required: "End date is required",
                        validate: {
                            futureDate: (value) => {
                                const now = new Date();
                                return (
                                    new Date(value) > now ||
                                    "Must be a future Date"
                                );
                            },
                            validEndDate: (value) =>
                                value > startDate ||
                                "End date must be later than start date",
                        },
                    })}
                />
                {errors.endDate && (
                    <p className={styles.e}>{errors.endDate.message}</p>
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
    );
};

export default NewCalendarTaskForm;
