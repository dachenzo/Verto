import styles from "./ProfileContainer.module.css";

interface Props {
    children: React.ReactNode;
}
const ProfileContainer = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>;
};

export default ProfileContainer;
