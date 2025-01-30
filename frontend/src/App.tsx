// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import MainPage from "./pages/MainPage";

import ProjectPage from "./pages/ProjectPage";

function App() {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/m" element={<HomePage />}></Route>
        //         <Route path="/main" element={<MainPage />}></Route>
        //         <Route path="/project/:id" element={<MainPage />}></Route>
        //     </Routes>
        // </Router>
        <>
            <ProjectPage></ProjectPage>
        </>
    );
}

export default App;
