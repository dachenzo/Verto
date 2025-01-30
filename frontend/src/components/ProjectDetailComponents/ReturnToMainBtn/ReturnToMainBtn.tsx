import styles from "./ReturntoMainBtn.module.css";

const ReturnToMainBtn = () => {
    return (
        <a href="#" className={styles.backBtn}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
        </a>
    );
};

export default ReturnToMainBtn;
