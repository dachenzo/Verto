import { CgProfile } from "react-icons/cg";
import styles from "./ProfileAtHeader.module.css";

const ProfileAtHeader = () => {
    return (
        <div className={styles.container}>
            <CgProfile className={styles.icon}></CgProfile>
            <p className={styles.title}>Dachenzo</p>
        </div>
    );
};

export default ProfileAtHeader;
