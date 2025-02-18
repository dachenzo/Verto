import { useState } from "react";
import styles from "./DeleteBtn.module.css";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";
import useDelete from "../../customHooks/useDelete";

interface Props {
    url: string;
    onSuccess: () => Promise<void>;
}

const DeleteBtn = ({ url, onSuccess }: Props) => {
    const [isModal, setIsModal] = useState(false);
    const { deleteItem } = useDelete(url, onSuccess);

    const handleDeleteClick = () => {
        setIsModal(true);
    };
    return (
        <>
            {isModal ? (
                <DeleteConfirmation
                    closeModal={() => setIsModal(false)}
                    deleteItem={async () => {
                        await deleteItem();
                    }}
                ></DeleteConfirmation>
            ) : (
                ""
            )}
            <button
                className={styles.deleteButton}
                aria-label="Delete"
                onClick={handleDeleteClick}
            >
                <svg className={styles.trashIcon} viewBox="0 0 24 24">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Delete
            </button>
        </>
    );
};

export default DeleteBtn;
