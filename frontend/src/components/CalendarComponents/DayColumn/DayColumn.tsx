import styles from "./DayColumn.module.css";

interface Props {
    dayName: string;
    dayDate: number;
    isToday: boolean;
    children?: React.ReactNode;
}

const DayColumn = ({ dayName, dayDate, isToday, children }: Props) => {
    return (
        <div className={styles.dayColumn}>
            <div
                className={`${styles.dayHeader} ${isToday ? styles.today : ""}`}
            >
                <div className={styles.weekday}>{dayName}</div>
                <div className={styles.date}>{dayDate}</div>
            </div>
            <div className={styles.dayContent}>
                <button className={styles.addTask}>+</button>
                {children}
            </div>
        </div>
    );
};

export default DayColumn;
