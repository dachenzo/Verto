import MainNavBar from "../components/MainNavBarComponents/MainNavBar/MainNavBar";
import Overview from "../components/OverviewComponents/Overview/Overview";
import ScreenBody from "../components/ScreenBody/ScreenBody";
import { useProjectsContext } from "../contexts/ProjectsContext";

const MainPage = () => {
    const { projects, loading } = useProjectsContext();

    return (
        <ScreenBody>
            <MainNavBar projects={projects} loading={loading}></MainNavBar>
            <Overview data={projects} loading={loading}></Overview>
        </ScreenBody>
    );
};

export default MainPage;
