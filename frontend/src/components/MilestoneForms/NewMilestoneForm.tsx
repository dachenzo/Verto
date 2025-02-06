import sharedFormStyles from "../ProjectForms/ProjectForms.module.css";
import sharedStyles from "../OverviewComponents/sharedStyles.module.css";
import styles from "./MilestoneForms.module.css";
import Overlay from "../TaskForms/Overlay/Overlay";
import { useForm } from "react-hook-form";
import useFormsSubmit from "../../customHooks/useFormSubmit";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import { useSelectedProject } from "../../contexts/ProjectContext";

interface Props {
    closeModal: () => void;
}

interface MilestoneFormData {
    title: string;

    description?: string;

    dueDate: Date;

    orderIndex: number;
}

const NewMilestoneForm = ({ closeModal }: Props) => {
    const { error, loading, submit } =
        useFormsSubmit<MilestoneFormData>("/milestone");

    const { selectedProject } = useSelectedProject();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MilestoneFormData>();

    const help = (data?: any) => {
        submit(data);
        closeModal();
    };

    const [milestones, setMilestones] = useState([
        { id: 1, title: "Setup Project Infrastructure" },
        { id: 2, title: "Design User Interface" },
        { id: 3, title: "Implement Core Features" },
        { id: 4, title: "Launch Version 1.0" },
    ]);

    const [placeholderAfter, setPlaceholderAfter] = useState<number | null>(
        null
    ); // null means "at the beginning"

    const handlePositionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;

        if (value === "start") {
            setPlaceholderAfter(null); // Place at the start
        } else if (value === "end") {
            setPlaceholderAfter(milestones[milestones.length - 1].id); // Place at the end
        } else {
            const id = parseInt(value.replace("After ", ""), 10); // Extract the ID from the option
            setPlaceholderAfter(id); // Place after the selected milestone
        }
    };

    return (
        <Overlay title={"Create New Milestone"}>
            {loading ? (
                <Spinner height={"500px"} width={"100px"}></Spinner>
            ) : (
                <form
                    className={sharedFormStyles.formCard}
                    onSubmit={handleSubmit(help)}
                >
                    {error && <p className={sharedFormStyles.e}>{error}</p>}
                    <div className={sharedFormStyles.formSection}>
                        <div className={sharedFormStyles.formGroup}>
                            <label className={sharedFormStyles.formLabel}>
                                Milestone Title
                            </label>
                            {errors.title && (
                                <p className={sharedFormStyles.e}>
                                    {errors.title.message}
                                </p>
                            )}
                            <input
                                {...register("title", {
                                    required: "Title is required",
                                })}
                                type="text"
                                className={sharedFormStyles.formInput}
                                placeholder="Enter milestone name"
                            />
                            <div className={sharedFormStyles.formHint}>
                                Choose a clear and descriptive name for your
                                milestone
                            </div>
                        </div>

                        <div className={sharedFormStyles.formGroup}>
                            <label className={sharedFormStyles.formLabel}>
                                Milestone Description
                            </label>
                            <textarea
                                {...register("description")}
                                className={sharedFormStyles.formInput}
                                placeholder="Enter milestone description"
                            ></textarea>
                            <div className={sharedFormStyles.formHint}>
                                Provide a brief overview of the milestone's
                                goals and objectives
                            </div>
                        </div>
                        <div className={sharedFormStyles.formGroup}>
                            <label className={sharedFormStyles.formLabel}>
                                Position
                            </label>
                            <select
                                {...register("orderIndex", {
                                    required: "Insertion Point is required",
                                })}
                                className={styles.select}
                                onChange={handlePositionChange}
                            >
                                <option value="" disabled selected>
                                    Select position
                                </option>
                                <option value="start">At the beginning</option>
                                {milestones.map((milestone) => (
                                    <option
                                        key={milestone.id}
                                        value={`After ${milestone.id}`}
                                    >
                                        {`After ${milestone.title}`}
                                    </option>
                                ))}
                                <option value="end">At the end</option>
                            </select>

                            <div className={styles.positionPreview}>
                                <div className={styles.milestonePreview}>
                                    {milestones.map((milestone) => (
                                        <>
                                            <div
                                                className={styles.milestoneItem}
                                            >
                                                {milestone.title}
                                            </div>
                                            {placeholderAfter ===
                                            milestone.id ? (
                                                <div
                                                    className={
                                                        styles.insertionPoint
                                                    }
                                                >
                                                    New Milestone Will Be Added
                                                    Here
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </>
                                    ))}
                                </div>
                            </div>
                            <p className={styles.helperText}>
                                Choose where to place this milestone in the
                                project timeline
                            </p>
                        </div>
                        <div className={sharedFormStyles.formGroup}>
                            <label className={sharedFormStyles.formLabel}>
                                Due Date
                            </label>
                            {errors.dueDate && (
                                <p className={sharedFormStyles.e}>
                                    {errors.dueDate.message}
                                </p>
                            )}
                            <input
                                type="date"
                                className={sharedFormStyles.formInput}
                                {...register("dueDate", {
                                    required: "due date is required",
                                    validate: {
                                        futureDate: (value) => {
                                            const now = new Date();
                                            return (
                                                new Date(value) > now ||
                                                "Must be a future Date"
                                            );
                                        },
                                    },
                                })}
                            />
                        </div>
                    </div>

                    <div className={sharedFormStyles.formActions}>
                        <button
                            type="button"
                            className={`${sharedStyles.btn} ${sharedStyles.btnSecondary}`}
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`${sharedStyles.btn} ${sharedStyles.btnPrimary}`}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                <polyline points="7 3 7 8 15 8"></polyline>
                            </svg>
                            Create Project
                        </button>
                    </div>
                </form>
            )}
        </Overlay>
    );
};

export default NewMilestoneForm;
