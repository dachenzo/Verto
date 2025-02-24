import ActivityLogItem from "../ActivityLogItem/ActivityLogItem";
import DaySeperator from "../DaySeperator/DaySeperator";

const ActivityList = () => {
    return (
        <div>
            <DaySeperator></DaySeperator>
            <ActivityLogItem></ActivityLogItem>
            <ActivityLogItem></ActivityLogItem>
            <DaySeperator></DaySeperator>
            <ActivityLogItem></ActivityLogItem>
            <ActivityLogItem></ActivityLogItem>
            <ActivityLogItem></ActivityLogItem>
            <ActivityLogItem></ActivityLogItem>
        </div>
    );
};

export default ActivityList;
