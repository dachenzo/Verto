import styles from "./NewTask.module.css";

interface Props {
    handleNewTaskClick: () => void;
}
const NewTask = ({ handleNewTaskClick }: Props) => {
    return (
        <button onClick={handleNewTaskClick} className={styles.btn}>
            New Task
        </button>
    );
};

export default NewTask;
