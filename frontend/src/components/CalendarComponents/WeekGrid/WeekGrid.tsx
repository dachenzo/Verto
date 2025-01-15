import styles from "./WeekGrid.module.css";

interface Props {
    children: React.ReactNode;
}
const WeekGrid = ({ children }: Props) => {
    return <div className={styles.week}>{children}</div>;
};

export default WeekGrid;
