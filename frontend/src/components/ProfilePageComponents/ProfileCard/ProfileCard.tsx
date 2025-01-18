import styles from "./ProfileCard.module.css";

interface Props {
    children: React.ReactNode;
}

const ProfileCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default ProfileCard;
