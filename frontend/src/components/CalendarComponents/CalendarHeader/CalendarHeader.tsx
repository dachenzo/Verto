import styles from "./CalendarHeader.module.css";

interface Props {
    children: React.ReactNode;
}

const CalendarHeader = ({ children }: Props) => {
    return <div className={styles.header}>{children}</div>;
};

export default CalendarHeader;
