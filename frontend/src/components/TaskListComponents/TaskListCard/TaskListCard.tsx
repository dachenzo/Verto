import styles from "./TaskListCard.module.css";

interface Props {
    children: React.ReactNode;
}

const TaskListCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default TaskListCard;
