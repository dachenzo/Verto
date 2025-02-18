import styles from "./DeleteConfirmation.module.css";

interface Props {
    closeModal: () => void;
    deleteItem: () => void;
}
const DeleteConfirmation = ({ closeModal, deleteItem }: Props) => {
    return (
        <div className={styles.overlay}>
            <div
                className={styles.confirmDialog}
                role="alertdialog"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-message"
            >
                <svg
                    className={styles.warningIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path d="M12 8v5" stroke-linecap="round"></path>
                    <path d="M12 16.5v.5" stroke-linecap="round"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                </svg>
                <div className={styles.dialogHeader}>
                    <h2 className="dialog-title" id="dialog-title">
                        Delete Item?
                    </h2>
                    <p className={styles.dialogMessage} id="dialog-message">
                        Are you sure you want to delete{" "}
                        <span className="item-name">"Project Report.pdf"</span>?
                        This action cannot be undone.
                    </p>
                </div>
                <div className={styles.dialogButtons}>
                    <button
                        className={`${styles.btn} ${styles.btnDelete}`}
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        className={`${styles.btn} ${styles.btnCancel}`}
                        onClick={() => {
                            deleteItem();
                            closeModal();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
