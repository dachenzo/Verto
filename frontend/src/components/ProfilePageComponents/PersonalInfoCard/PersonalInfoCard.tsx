import styles from "./PersonalInfoCard.module.css";

interface Props {
    children: React.ReactNode;
}

const PersonalInfoCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default PersonalInfoCard;
