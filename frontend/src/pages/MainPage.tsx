import MainNavBar from "../components/MainNavBarComponents/MainNavBar/MainNavBar";
import Overview from "../components/OverviewComponents/Overview/Overview";
import ScreenBody from "../components/ScreenBody/ScreenBody";
import useProjects from "../customHooks/useProjects";

const MainPage = () => {
    const { data, loading, error } = useProjects();
    return (
        <ScreenBody>
            <MainNavBar projects={data}></MainNavBar>
            <Overview data={data}></Overview>
        </ScreenBody>
    );
};

export default MainPage;
