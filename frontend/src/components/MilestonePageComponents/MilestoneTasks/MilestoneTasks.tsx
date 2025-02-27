import GenericWhiteCard from "../../GenericWhiteCard/GenericWhiteCard";
import styles from "./MilestoneTasks.module.css";
import sharedStyles from "../../OverviewComponents/sharedStyles.module.css";
import MilestoneTaskList from "../MilestoneTaskList/MilestoneTaskList";
import { useState } from "react";
import NewTaskForm from "../../TaskForms/NewTaskForm";
const MilestoneTasks = () => {
    const [isForm, setIsForm] = useState<boolean>(false);
    const handleNewTaskBtn = () => {
        setIsForm(true);
    };
    return (
        <>
            <GenericWhiteCard>
                <div className={styles.height}>
                    <div className={styles.tasksHeader}>
                        <h2 className={styles.headerTitle}>Tasks</h2>
                        {isForm ? (
                            <NewTaskForm
                                setIsNewTaskForm={setIsForm}
                            ></NewTaskForm>
                        ) : (
                            ""
                        )}
                        <button
                            className={`${sharedStyles.btn} ${sharedStyles.btnPrimary}`}
                            onClick={handleNewTaskBtn}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Add Task
                        </button>
                    </div>

                    <MilestoneTaskList></MilestoneTaskList>
                </div>
            </GenericWhiteCard>
        </>
    );
};

export default MilestoneTasks;
