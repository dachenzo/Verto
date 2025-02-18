import { useState } from "react";
import EditProjectForm from "../../ProjectForms/EditProjectForm";
import styles from "../ProjectDetailHeader/ProjectDetailHeader.module.css";

const EditProjectBtn = () => {
    const [isForm, setIsForm] = useState<boolean>(false);
    return (
        <>
            {isForm ? (
                <EditProjectForm
                    closeModal={() => setIsForm(false)}
                ></EditProjectForm>
            ) : (
                ""
            )}
            <button
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={() => setIsForm(true)}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit
            </button>
        </>
    );
};

export default EditProjectBtn;
