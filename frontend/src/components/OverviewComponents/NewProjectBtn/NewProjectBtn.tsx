import { useState } from "react";
import sharedStyles from "../sharedStyles.module.css";
import NewProjectForm from "../../ProjectForms/NewProjectForm";

const NewProjectBtn = () => {
    const [isForm, setIsForm] = useState<boolean>(false);

    return (
        <>
            <button
                className={`${sharedStyles.btn} ${sharedStyles.btnPrimary}`}
                onClick={() => setIsForm(true)}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Project
            </button>
            {isForm ? (
                <NewProjectForm closeModal={() => setIsForm(false)} />
            ) : (
                ""
            )}
        </>
    );
};

export default NewProjectBtn;
