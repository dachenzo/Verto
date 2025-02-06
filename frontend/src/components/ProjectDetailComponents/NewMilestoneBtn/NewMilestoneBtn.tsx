import { useState } from "react";
import sharedStyles from "../../OverviewComponents/sharedStyles.module.css";
import NewMilestoneForm from "../../MilestoneForms/NewMilestoneForm";

const NewMilestoneBtn = () => {
    const [isForm, setIsForm] = useState<boolean>(false);

    return (
        <>
            <button
                className={`${sharedStyles.btn} ${sharedStyles.btnPrimary}`}
                onClick={() => setIsForm(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Milestone
            </button>
            {isForm ? (
                <NewMilestoneForm
                    closeModal={() => setIsForm(false)}
                ></NewMilestoneForm>
            ) : (
                ""
            )}
        </>
    );
};

export default NewMilestoneBtn;
