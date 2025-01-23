import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import ScreenBody from "./components/ScreenBody/ScreenBody";

import TaskListPage from "./pages/TaskListPage";
import Dashboard from "./pages/Dashboard";

import CalendarPage from "./pages/CalendarPage";
import { useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

// import MainPage from "./pages/MainPage";
export type Pages = "D" | "T" | "C" | "P" | "S";

function App() {
    const page_map: Record<Pages, JSX.Element> = {
        C: <CalendarPage></CalendarPage>,
        T: <TaskListPage></TaskListPage>,
        D: <Dashboard></Dashboard>,
        P: <ProfilePage></ProfilePage>,
        S: <SettingsPage></SettingsPage>,
    };

    const [page, setPage] = useState<Pages>("D");

    return (
        <>
            <ScreenBody>
                <LeftSideBar page={page} setPage={setPage}></LeftSideBar>
                {page_map[page]}
            </ScreenBody>
            {/* <MainPage></MainPage> */}
        </>
    );
}

export default App;
