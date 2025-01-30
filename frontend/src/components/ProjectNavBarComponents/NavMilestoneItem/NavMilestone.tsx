import styles from "./NavMilestone.module.css";

interface Props {
    name: string;
    completed: boolean;
}

const NavMilestone = ({ name, completed }: Props) => {
    return (
        <a href="#" className={`${styles.navTab} ${styles.active}`}>
            {completed ? (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            ) : (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            )}
            {name}
        </a>
    );
};

export default NavMilestone;
