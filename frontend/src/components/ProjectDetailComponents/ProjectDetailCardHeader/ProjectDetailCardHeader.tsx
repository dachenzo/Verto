import ProgressBar from "../../ProgressBar/ProgressBar";
import styles from "./ProjectDetailCardHeader.module.css";

const ProjectDetailCardHeader = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Project Overview</h2>
            <p>
                Complete redesign of the company website with a focus on
                improving user experience and conversion rates. The new design
                will be modern, responsive, and aligned with our updated brand
                guidelines.
            </p>

            <div className={styles.progressSection}>
                <ProgressBar></ProgressBar>
            </div>
        </div>
    );
};

export default ProjectDetailCardHeader;
