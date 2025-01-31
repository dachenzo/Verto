import MilestonePageHeader from "../MilestonePageHeader/MilestonePageHeader";
import MilestoneTasks from "../MilestoneTasks/MilestoneTasks";
import styles from "./MilestonePage.module.css";

const MilestonePage = () => {
    return (
        <div className={styles.mainContent}>
            <MilestonePageHeader></MilestonePageHeader>
            <MilestoneTasks></MilestoneTasks>
        </div>
    );
};

export default MilestonePage;
