// TASKLIST PAGE

//LOGIN COMPONENTS

import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import ScreenBody from "./components/ScreenBody/ScreenBody";

import TaskListPage from "./pages/TaskListPage";
import Dashboard from "./pages/Dashboard";

// import DashHeader from "./components/DashHeader/DashHeader";

import CalendarPage from "./pages/CalendarPage";
import { useState } from "react";
import ProfilePage from "./pages/ProfilePage";
export type Pages = "D" | "T" | "C" | "P";

function App() {
    const page_map: Record<Pages, JSX.Element> = {
        C: <CalendarPage></CalendarPage>,
        T: <TaskListPage></TaskListPage>,
        D: <Dashboard></Dashboard>,
        P: <ProfilePage></ProfilePage>,
    };

    const [page, setPage] = useState<Pages>("D");

    return (
        <ScreenBody>
            <LeftSideBar page={page} setPage={setPage}></LeftSideBar>
            {page_map[page]}
        </ScreenBody>
    );
}

export default App;
