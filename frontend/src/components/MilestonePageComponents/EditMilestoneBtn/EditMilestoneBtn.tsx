import { useState } from "react";
import styles from "./EditMilestoneBtn.module.css";
import EditMilestoneForm from "../../MilestoneForms/EditMilestoneForm";

const EditMilestoneBtn = () => {
    const [isForm, setIsForm] = useState<boolean>(false);
    return (
        <>
            {isForm ? (
                <EditMilestoneForm
                    closeModal={() => setIsForm(false)}
                ></EditMilestoneForm>
            ) : (
                ""
            )}

            <button
                className={styles.editButton}
                onClick={() => setIsForm(true)}
            >
                <svg viewBox="0 0 24 24">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit
            </button>
        </>
    );
};

export default EditMilestoneBtn;
