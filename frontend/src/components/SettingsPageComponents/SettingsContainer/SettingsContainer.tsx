import styles from "./SettingsContainer.module.css";

interface Props {
    children: React.ReactNode;
}

const SettingsContainer = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>;
};

export default SettingsContainer;
