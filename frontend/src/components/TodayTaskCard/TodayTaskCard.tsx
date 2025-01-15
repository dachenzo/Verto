import styles from "./TodayTaskCard.module.css";

interface Props {
    children: React.ReactNode;
}

const TodayTaskCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default TodayTaskCard;
