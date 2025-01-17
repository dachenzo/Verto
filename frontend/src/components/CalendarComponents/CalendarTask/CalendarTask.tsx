import styles from "./CalendarTask.module.css";

interface Props {
    priority: "LOW" | "MED" | "HIGH";
}
const CalendarTask = ({ priority }: Props) => {
    const prority_style: Record<string, CSSModuleClasses[string]> = {
        LOW: styles.low,
        MED: styles.med,
        HIGH: styles.high,
    };
    return (
        <div className={`${styles.task} ${prority_style[priority]}`}>
            <div className={styles.taskTitle}>Team Meeting</div>
            <div className={styles.taskTime}>10:00 AM</div>
        </div>
    );
};

export default CalendarTask;
