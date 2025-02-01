import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./components/ProjectDetailComponents/ProjectDetail/ProjectDetail";
import MilestonePage from "./components/MilestonePageComponents/MilestonePage/MilestonePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/main" element={<MainPage />}></Route>
                <Route path="/project/:projectId" element={<ProjectPage />}>
                    <Route path="" element={<ProjectDetail />}></Route>
                    <Route
                        path="milestone/:milestoneId"
                        element={<MilestonePage />}
                    ></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
