import ActivityLogHeader from "../ActivityLogHeader/ActivityLogHeader";
import ActivityList from "../ActivityList/ActivityList";
import styles from "./ActivityLog.module.css";

const ActivityLog = () => {
    return (
        <div className={styles.activityLog}>
            <ActivityLogHeader></ActivityLogHeader>
            <ActivityList></ActivityList>
        </div>
    );
};

export default ActivityLog;
