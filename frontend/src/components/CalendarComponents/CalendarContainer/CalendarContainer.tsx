import styles from "./CalendarContainer.module.css";

interface Props {
    children: React.ReactNode;
}

const CalendarContainer = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>;
};

export default CalendarContainer;
