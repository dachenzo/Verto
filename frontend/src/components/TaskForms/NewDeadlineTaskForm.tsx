// import { useForm } from "react-hook-form";
import styles from "./TaskForms.module.css";

// import

// interface Props {
//     handleClick: () => void;
// }

// interface Data {
//     title: string;
//     description?: string;
//     deadline: string;
// }

interface Props {
    setIsNewTaskForm: (x: boolean) => void;
}
const NewDeadlineTaskForm = ({ setIsNewTaskForm }: Props) => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm<Data>();
    // const submit = (data: Data) => {
    //     console.log(data);
    // };
    return (
        // <>
        // <div className={styles.backdrop}>
        //     <FormCard>
        //         <div className={styles.closebtncontainer}>
        //             <IoMdCloseCircleOutline
        //                 className={styles.icon}
        //                 onClick={handleClick}
        //             ></IoMdCloseCircleOutline>
        //         </div>
        //         <form action="" onSubmit={handleSubmit(submit)}>
        //             <label className={styles.formLabel} htmlFor="title">
        //                 Title
        //             </label>
        //             {errors.title && (
        //                 <p className={styles.e}>{errors.title.message}</p>
        //             )}
        //             <input
        //                 {...register("title", {
        //                     required: "Title is required",
        //                 })}
        //                 className={styles.formInput}
        //                 type="text"
        //                 id="title"
        //                 name="title" />

        //             <label className={styles.formLabel} htmlFor="description">
        //                 Description
        //             </label>
        //             <input
        //                 {...register("description")}
        //                 className={styles.formInput}
        //                 type="text"
        //                 id="description"
        //                 name="description" />

        //             <label className={styles.formLabel} htmlFor="deadline">
        //                 Deadline
        //             </label>
        //             {errors.deadline && (
        //                 <p className={styles.e}>{errors.deadline.message}</p>
        //             )}
        //             <input
        //                 {...register("deadline", {
        //                     required: "deadline is required",
        //                 })}
        //                 className={styles.formInput}
        //                 type="date"
        //                 id="deadline"
        //                 name="deadline" />
        //             <button className={styles.btn} type="submit">
        //                 Create
        //             </button>
        //         </form>
        //     </FormCard>
        // </div>
        <>
            <form id="newDeadlineTaskForm">
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
                    <label className={styles.formLabel} htmlFor="taskDueDate">
                        Due Date
                    </label>
                    <input
                        type="datetime-local"
                        id="taskDueDate"
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
        </>
    );
};

export default NewDeadlineTaskForm;
