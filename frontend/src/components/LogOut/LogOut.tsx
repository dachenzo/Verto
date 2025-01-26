import useLogOut from "../../customHooks/useLogOut";
import styles from "./LogOut.module.css";

const LogOut = () => {
    const { logOut, error } = useLogOut();

    const handleLogOut = () => {
        logOut();
        console.log(error);
    };
    return (
        <button
            className={`${styles.navLink} ${styles.logout}`}
            onClick={handleLogOut}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
        </button>
    );
};

export default LogOut;
