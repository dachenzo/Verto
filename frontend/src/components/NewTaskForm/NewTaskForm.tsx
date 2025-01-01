import { useForm } from "react-hook-form";
import FormCard from "../FormCard/FormCard";
import styles from "./NewTaskForm.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import

interface Props {
    handleClick: () => void;
}

interface Data {
    title: string;
    description?: string;
    deadline: string;
}
const NewTaskForm = ({ handleClick }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Data>();
    const submit = (data: Data) => {
        console.log(data);
    };
    return (
        <div className={styles.backdrop}>
            <FormCard>
                <div className={styles.closebtncontainer}>
                    <IoMdCloseCircleOutline
                        className={styles.icon}
                        onClick={handleClick}
                    ></IoMdCloseCircleOutline>
                </div>
                <form action="" onSubmit={handleSubmit(submit)}>
                    <label className={styles.formLabel} htmlFor="title">
                        Title
                    </label>
                    {errors.title && (
                        <p className={styles.e}>{errors.title.message}</p>
                    )}
                    <input
                        {...register("title", {
                            required: "Title is required",
                        })}
                        className={styles.formInput}
                        type="text"
                        id="title"
                        name="title"
                    />

                    <label className={styles.formLabel} htmlFor="description">
                        Description
                    </label>
                    <input
                        {...register("description")}
                        className={styles.formInput}
                        type="text"
                        id="description"
                        name="description"
                    />

                    <label className={styles.formLabel} htmlFor="deadline">
                        Deadline
                    </label>
                    {errors.deadline && (
                        <p className={styles.e}>{errors.deadline.message}</p>
                    )}
                    <input
                        {...register("deadline", {
                            required: "deadline is required",
                        })}
                        className={styles.formInput}
                        type="date"
                        id="deadline"
                        name="deadline"
                    />
                    <button className={styles.btn} type="submit">
                        Create
                    </button>
                </form>
            </FormCard>
        </div>
    );
};

export default NewTaskForm;
