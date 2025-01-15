import styles from "./DaedlineTaskCard.module.css";

interface Props {
    children: React.ReactNode;
}

const DeadlineTaskCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default DeadlineTaskCard;
