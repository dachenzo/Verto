import styles from "./SettingsCard.module.css";

interface Props {
    children: React.ReactNode;
}

const SettingsCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default SettingsCard;
