import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Overlay from "../TaskForms/Overlay/Overlay";
import Spinner from "../Spinner/Spinner";
import { useSelectedProject } from "../../contexts/SelectedProjectContext";
import sharedFormStyles from "../ProjectForms/ProjectForms.module.css";
import sharedStyles from "../OverviewComponents/sharedStyles.module.css";
import styles from "./MilestoneForms.module.css";
import useFormUpdate from "../../customHooks/useFormUpdate";

interface Props {
    closeModal: () => void;
}

interface MilestoneFormData {
    title: string;
    description?: string;
    dueDate: Date;
    orderIndex: number;
}

const EditMilestoneForm = ({ closeModal }: Props) => {
    const { milestoneId } = useParams();
    const { selectedProject, loadProjectDetails } = useSelectedProject();
    const { error, updateLoading, submit } = useFormUpdate(
        `/milestone/${milestoneId}`
    );

    // Get the current milestone (if any)
    const currentMilestone =
        selectedProject?.milestones && milestoneId
            ? selectedProject.milestones.find(
                  (m) => m.milestoneId === parseInt(milestoneId, 10)
              )
            : undefined;

    // Create a filtered list that excludes the current milestone
    const milestonesForOrdering = selectedProject?.milestones
        ? currentMilestone
            ? selectedProject.milestones.filter(
                  (m) => m.milestoneId !== currentMilestone.milestoneId
              )
            : selectedProject.milestones
        : [];

    // Determine the default insertion point.
    // For instance, if the current milestone is not the first, we’ll insert it after the milestone before it.
    let initialPlaceholderAfter: number | null = null;
    if (selectedProject?.milestones && currentMilestone) {
        const fullIndex = selectedProject.milestones.findIndex(
            (m) => m.milestoneId === currentMilestone.milestoneId
        );
        // If it’s not the first, default to "after" the previous milestone
        initialPlaceholderAfter = fullIndex > 0 ? fullIndex - 1 : null;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MilestoneFormData>({
        // Pre-fill the form fields with the current milestone’s data
        defaultValues: {
            title: currentMilestone?.title || "",
            description: currentMilestone?.description || "",
            // Format the date for the date input (YYYY-MM-DD)
        },
    });

    // Use the default insertion point for the placeholder state.
    // Note: In the new (or re-ordered) list, the indices might be shifted,
    // but since we removed only the current milestone, the "after" milestone’s position remains consistent.
    const [placeholderAfter, setPlaceholderAfter] = useState<number | null>(
        initialPlaceholderAfter
    );

    const formSubmit = async (data: any) => {
        // Calculate the new orderIndex based on the selected insertion point.
        const extractOrderIndex = (placeholderAfter: number | null) => {
            if (placeholderAfter === null) {
                if (milestonesForOrdering.length > 0) {
                    // Inserting at the beginning: subtract 1 from the first milestone’s index
                    return Number(milestonesForOrdering[0].orderIndex) - 1;
                }
                return 1;
            } else {
                const n = milestonesForOrdering.length;
                if (placeholderAfter === n - 1) {
                    // Inserting after the last milestone: add 1 to the last milestone’s index
                    return Number(milestonesForOrdering[n - 1].orderIndex) + 1;
                } else {
                    // Inserting between milestones: take the average of the adjacent order indexes
                    return (
                        (Number(
                            milestonesForOrdering[placeholderAfter].orderIndex
                        ) +
                            Number(
                                milestonesForOrdering[placeholderAfter + 1]
                                    .orderIndex
                            )) /
                        2
                    );
                }
            }
        };

        const orderIndex = extractOrderIndex(placeholderAfter);
        const finalData = {
            ...data,
            orderIndex,
        };
        console.log(finalData);
        await submit(finalData);
        await loadProjectDetails(selectedProject?.projectId as number);
        closeModal();
    };

    // Handle changes in the select element
    const handlePositionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;
        if (value === "start") {
            setPlaceholderAfter(null); // Place at the beginning
        } else {
            // Since we are mapping over the filtered list, the value corresponds to that index.
            setPlaceholderAfter(parseInt(value, 10));
        }
    };

    return (
        <Overlay title={"Edit Milestone"}>
            {updateLoading ? (
                <Spinner height={"500px"} width={"100px"} />
            ) : (
                <form
                    className={sharedFormStyles.formCard}
                    onSubmit={handleSubmit(formSubmit)}
                >
                    {error && <p className={sharedFormStyles.e}>{error}</p>}
                    <div className={sharedFormStyles.formSection}>
                        {/* Milestone Title */}
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
                        </div>

                        {/* Milestone Description */}
                        <div className={sharedFormStyles.formGroup}>
                            <label className={sharedFormStyles.formLabel}>
                                Milestone Description
                            </label>
                            <textarea
                                {...register("description")}
                                className={sharedFormStyles.formInput}
                                placeholder="Enter milestone description"
                            ></textarea>
                        </div>

                        {/* Position Select */}
                        <div className={sharedFormStyles.formGroup}>
                            <label className={sharedFormStyles.formLabel}>
                                Position
                            </label>
                            <select
                                required
                                className={styles.select}
                                onChange={handlePositionChange}
                                defaultValue={
                                    initialPlaceholderAfter === null
                                        ? "start"
                                        : String(initialPlaceholderAfter)
                                }
                            >
                                <option value="" disabled>
                                    Select position
                                </option>
                                <option value="start">At the beginning</option>
                                {/* Only list milestones from the filtered array */}
                                {milestonesForOrdering.map((m, index) => (
                                    <option key={m.milestoneId} value={index}>
                                        {`After ${m.title}`}
                                    </option>
                                ))}
                            </select>

                            {/* Position Preview */}
                            <div className={styles.positionPreview}>
                                <div className={styles.milestonePreview}>
                                    {placeholderAfter === null && (
                                        <div className={styles.insertionPoint}>
                                            New Milestone Will Be Added Here
                                        </div>
                                    )}
                                    {milestonesForOrdering.map((m, index) => (
                                        <React.Fragment key={m.milestoneId}>
                                            <div
                                                className={styles.milestoneItem}
                                            >
                                                {m.title}
                                            </div>
                                            {placeholderAfter === index && (
                                                <div
                                                    className={
                                                        styles.insertionPoint
                                                    }
                                                >
                                                    New Milestone Will Be Added
                                                    Here
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <p className={styles.helperText}>
                                Choose where to place this milestone in the
                                project timeline
                            </p>
                        </div>

                        {/* Due Date */}
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
                                defaultValue={
                                    currentMilestone
                                        ? new Date(currentMilestone.dueDate)
                                              .toISOString()
                                              .split("T")[0]
                                        : ""
                                }
                                {...register("dueDate", {
                                    required: "Due date is required",
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

                    {/* Form Actions */}
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
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        </Overlay>
    );
};

export default EditMilestoneForm;
