import styles from "./UpcomingTaskCard.module.css";

interface Props {
    children: React.ReactNode;
}
const UpcomingTaskCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default UpcomingTaskCard;
