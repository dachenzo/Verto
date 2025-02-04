import styles from "./Projectmeta.module.css";

interface Props {
    dueDate: string | undefined;
}

const ProjectMeta = ({ dueDate }: Props) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    const formattedDate = dueDate ? formatDate(dueDate) : "N/A"; // Fal

    return (
        <div className={styles.projectMeta}>
            <div className={styles.teamAvatars}>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
            </div>
            <div className={styles.dueDate}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {formattedDate}
            </div>
        </div>
    );
};

export default ProjectMeta;
