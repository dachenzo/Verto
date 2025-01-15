// TASKLIST PAGE

//LOGIN COMPONENTS

import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import ScreenBody from "./components/ScreenBody/ScreenBody";

// import TaskListPage from "./pages/TaskListPage";
// import Dashboard from "./pages/Dashboard";

// import DashHeader from "./components/DashHeader/DashHeader";

import CalendarPage from "./pages/CalendarPage";

function App() {
    return (
        <ScreenBody>
            <LeftSideBar></LeftSideBar>
            <CalendarPage></CalendarPage>
        </ScreenBody>
    );
}

export default App;
