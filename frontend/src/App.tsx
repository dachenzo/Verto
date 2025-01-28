import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/main" element={<HomePage />}></Route>
                <Route path="/" element={<MainPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
