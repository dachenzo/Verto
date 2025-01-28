import { useState } from "react";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import ScreenBody from "../components/ScreenBody/ScreenBody";
import CalendarPage from "./CalendarPage";
// import Dashboard from "./Dashboard";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import TaskListPage from "./TaskListPage";
import Overview from "../components/OverviewComponents/Overview/Overview";

export type Pages = "D" | "T" | "C" | "P" | "S";

const MainPage = () => {
    const page_map: Record<Pages, JSX.Element> = {
        C: <CalendarPage></CalendarPage>,
        T: <TaskListPage></TaskListPage>,
        D: <Overview />,
        P: <ProfilePage></ProfilePage>,
        S: <SettingsPage></SettingsPage>,
    };

    const [page, setPage] = useState<Pages>("D");
    return (
        <ScreenBody>
            <LeftSideBar page={page} setPage={setPage}></LeftSideBar>
            {page_map[page]}
        </ScreenBody>
    );
};

export default MainPage;
