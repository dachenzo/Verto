import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./components/ProjectDetailComponents/ProjectDetail/ProjectDetail";
import MilestonePage from "./components/MilestonePageComponents/MilestonePage/MilestonePage";
import useAuthRefresh from "./customHooks/useAuthRefresh";
import { SelectedProjectProvider } from "./contexts/SelectedProjectContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import ActivityLog from "./components/UserMangementComponents/ActivityLog/ActivityLog";

function App() {
    useAuthRefresh();
    return (
        <ProjectsProvider>
            <SelectedProjectProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/main" element={<MainPage />}></Route>
                        <Route
                            path="/project/:projectId"
                            element={<ProjectPage />}
                        >
                            <Route path="" element={<ProjectDetail />}></Route>
                            <Route
                                path="users"
                                element={<ActivityLog />}
                            ></Route>
                            <Route
                                path="milestone/:milestoneId"
                                element={<MilestonePage />}
                            ></Route>
                        </Route>
                    </Routes>
                </Router>
            </SelectedProjectProvider>
        </ProjectsProvider>
    );
}

export default App;
