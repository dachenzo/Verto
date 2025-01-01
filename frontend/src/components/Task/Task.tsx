import styles from "./Task.module.css";

interface Props {
    description: string;
    title: string;
}
const Task = ({ title, description }: Props) => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.btn}>Edit</button>
                <button className={styles.btn}>Delete</button>
            </div>
        </div>
    );
};

export default Task;
