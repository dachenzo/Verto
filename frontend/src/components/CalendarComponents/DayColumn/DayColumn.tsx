import styles from "./DayColumn.module.css";

interface Props {
    dayName: string;
    dayDate: number;
    isToday: boolean;
}

const DayColumn = ({ dayName, dayDate, isToday }: Props) => {
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
            </div>
        </div>
    );
};

export default DayColumn;
