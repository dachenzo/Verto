import styles from "./Overlay.module.css";

interface Props {
    title: string;
    children: React.ReactNode;
}
const Overlay = ({ title, children }: Props) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Overlay;
