import EditCalendarTaskForm from "./EditCalendarTaskForm";
import EditDeadlineTaskForm from "./EditDeadlineTaskForm";
import Overlay from "./Overlay/Overlay";

interface Props {
    cancelEdit: (x: boolean) => void;
}

const EditTaskForm = ({ cancelEdit }: Props) => {
    const type = false;
    return (
        <Overlay title={"Edit Task"}>
            {type ? (
                <EditCalendarTaskForm
                    cancelEdit={cancelEdit}
                ></EditCalendarTaskForm>
            ) : (
                <EditDeadlineTaskForm
                    cancelEdit={cancelEdit}
                ></EditDeadlineTaskForm>
            )}
        </Overlay>
    );
};

export default EditTaskForm;
