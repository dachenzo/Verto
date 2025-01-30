import MainNavBar from "../components/MainNavBarComponents/MainNavBar/MainNavBar";
import Overview from "../components/OverviewComponents/Overview/Overview";
import ScreenBody from "../components/ScreenBody/ScreenBody";

const MainPage = () => {
    return (
        <ScreenBody>
            <MainNavBar></MainNavBar>
            <Overview></Overview>
        </ScreenBody>
    );
};

export default MainPage;
