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

    const { selectedProject, loadProjectDetails } = useSelectedProject();
    console.log(selectedProject?.milestones);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MilestoneFormData>();

    const [placeholderAfter, setPlaceholderAfter] = useState<number | null>(
        null
    ); // null means "at the beginning"

    const formSubmit = async (data?: any) => {
        const extractOrderIndex = (placeholderAfter: number | null) => {
            if (placeholderAfter === null) {
                if (
                    selectedProject?.milestones &&
                    selectedProject.milestones.length > 0
                ) {
                    // Inserting at the beginning: subtract 1 from the first milestone's index
                    return Number(selectedProject.milestones[0].orderIndex) - 1;
                }
                return 1;
            } else {
                if (selectedProject?.milestones !== undefined) {
                    const n = selectedProject.milestones.length;
                    if (placeholderAfter === n - 1) {
                        // Inserting after the last milestone: add 1 to the last milestone's index
                        return (
                            Number(
                                selectedProject.milestones[n - 1].orderIndex
                            ) + 1
                        );
                    } else {
                        // Inserting between milestones: take the average
                        return (
                            (Number(
                                selectedProject.milestones[placeholderAfter]
                                    .orderIndex
                            ) +
                                Number(
                                    selectedProject.milestones[
                                        placeholderAfter + 1
                                    ].orderIndex
                                )) /
                            2
                        );
                    }
                }
            }
        };

        const orderIndex = extractOrderIndex(placeholderAfter);
        console.log(orderIndex);
        const finalData = {
            projectId: selectedProject?.projectId,
            ...data,
            orderIndex,
        };
        await submit(finalData);
        await loadProjectDetails(selectedProject?.projectId as number);
        closeModal();
    };

    const handlePositionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;

        if (value === "start") {
            setPlaceholderAfter(null); // Place at the start
        } else {
            const id = parseInt(value, 10); // Extract the ID from the option
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
                    onSubmit={handleSubmit(formSubmit)}
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
                                required
                                className={styles.select}
                                onChange={handlePositionChange}
                                defaultValue={""}
                            >
                                <option value="" disabled>
                                    Select position
                                </option>
                                <option value="start">At the beginning</option>
                                {selectedProject?.milestones
                                    ? selectedProject.milestones.map(
                                          (milestone, index) => (
                                              <option key={index} value={index}>
                                                  {`After ${milestone.title}`}
                                              </option>
                                          )
                                      )
                                    : ""}
                            </select>

                            <div className={styles.positionPreview}>
                                <div className={styles.milestonePreview}>
                                    {placeholderAfter === null ? (
                                        <div className={styles.insertionPoint}>
                                            New Milestone Will Be Added Here
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {selectedProject?.milestones
                                        ? selectedProject.milestones.map(
                                              (milestone, index) => (
                                                  <>
                                                      <div
                                                          className={
                                                              styles.milestoneItem
                                                          }
                                                      >
                                                          {milestone.title}
                                                      </div>

                                                      {placeholderAfter ===
                                                      index ? (
                                                          <div
                                                              className={
                                                                  styles.insertionPoint
                                                              }
                                                          >
                                                              New Milestone Will
                                                              Be Added Here
                                                          </div>
                                                      ) : (
                                                          ""
                                                      )}
                                                  </>
                                              )
                                          )
                                        : ""}
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
