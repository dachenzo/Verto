import styles from "./GenericWhiteCard.module.css";

interface Props {
    children: React.ReactNode;
}

const GenericWhiteCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default GenericWhiteCard;
