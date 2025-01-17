// TASKLIST PAGE

//LOGIN COMPONENTS

import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import ScreenBody from "./components/ScreenBody/ScreenBody";

import TaskListPage from "./pages/TaskListPage";
import Dashboard from "./pages/Dashboard";

// import DashHeader from "./components/DashHeader/DashHeader";

import CalendarPage from "./pages/CalendarPage";
import { useState } from "react";
export type Pages = "D" | "T" | "C";

function App() {
    const page_map: Record<Pages, JSX.Element> = {
        C: <CalendarPage></CalendarPage>,
        T: <TaskListPage></TaskListPage>,
        D: <Dashboard></Dashboard>,
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
