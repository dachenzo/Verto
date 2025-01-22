import { useState } from "react";
import styles from "./NewTaskBtn.module.css";
import NewTaskForm from "../TaskForms/NewTaskForm";

const NewTaskBtn = () => {
    const [isNewTaskForm, setIsNewTaskForm] = useState<boolean>(false);
    console.log(isNewTaskForm);
    return (
        <>
            <button
                className={styles.btn}
                onClick={() => setIsNewTaskForm(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Task
            </button>

            {isNewTaskForm ? (
                <NewTaskForm setIsNewTaskForm={setIsNewTaskForm}></NewTaskForm>
            ) : (
                ""
            )}
        </>
    );
};

export default NewTaskBtn;
