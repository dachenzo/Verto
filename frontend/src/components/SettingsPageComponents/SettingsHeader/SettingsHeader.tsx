import SliderCheckbox from "../SliderCheckbox/SliderCheckbox";
import styles from "./SettingsHeader.module.css";

const SettingsHeader = () => {
    return (
        <div className={styles.header}>
            <h2 className={styles.title}>Email Notifications</h2>
            <SliderCheckbox></SliderCheckbox>
        </div>
    );
};

export default SettingsHeader;
