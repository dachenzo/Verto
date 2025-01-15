// TASKLIST PAGE

//LOGIN COMPONENTS

import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import ScreenBody from "./components/ScreenBody/ScreenBody";

import TaskListPage from "./pages/TaskListPage";
// import Dashboard from "./pages/Dashboard";

// import DashHeader from "./components/DashHeader/DashHeader";
function App() {
    return (
        <ScreenBody>
            <LeftSideBar></LeftSideBar>
            <TaskListPage></TaskListPage>
        </ScreenBody>
    );
}

export default App;
