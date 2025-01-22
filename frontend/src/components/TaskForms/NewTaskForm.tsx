import { useState } from "react";
import NewCalendarTaskForm from "./NewCalendarTaskForm";
import styles from "./TaskForms.module.css";
import NewDeadlineTaskForm from "./NewDeadlineTaskForm";
import Overlay from "./Overlay/Overlay";

interface Props {
    setIsNewTaskForm: (x: boolean) => void;
}

const NewTaskForm = ({ setIsNewTaskForm }: Props) => {
    const [isCalnedarTaskForm, setIsCalendarTaskForm] = useState<boolean>(true);

    const handleFormSwitch = () => setIsCalendarTaskForm(!isCalnedarTaskForm);
    return (
        <>
            <Overlay title={"Create New Task"}>
                <div className={styles.typeTabs}>
                    <div
                        className={`${styles.typeTab} ${
                            isCalnedarTaskForm ? styles.active : ""
                        }`}
                        onClick={() => handleFormSwitch()}
                    >
                        Calendar Task
                    </div>
                    <div
                        className={`${styles.typeTab} ${
                            !isCalnedarTaskForm ? styles.active : ""
                        }`}
                        onClick={() => handleFormSwitch()}
                    >
                        Deadline Task
                    </div>
                </div>
                {isCalnedarTaskForm ? (
                    <NewCalendarTaskForm
                        setIsNewTaskForm={setIsNewTaskForm}
                    ></NewCalendarTaskForm>
                ) : (
                    <NewDeadlineTaskForm
                        setIsNewTaskForm={setIsNewTaskForm}
                    ></NewDeadlineTaskForm>
                )}
            </Overlay>
        </>
    );
};

export default NewTaskForm;
