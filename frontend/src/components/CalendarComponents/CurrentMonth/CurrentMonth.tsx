import styles from "./CurrentMonth.module.css";

interface Props {
    month: string;
    year: string;
}

const CurrentMonth = ({ month, year }: Props) => {
    return <div className={styles.currentMonth}>{month + " " + year}</div>;
};

export default CurrentMonth;
