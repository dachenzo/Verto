interface Props {
    children: React.ReactNode;
}

import styles from "./TaskCardHeader.module.css";

const TaskCardHeader = ({ children }: Props) => {
    return <div className={styles.title}>{children}</div>;
};

export default TaskCardHeader;
