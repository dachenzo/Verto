import Auth from "../components/Auth/Auth";
import LandingPage from "../components/LandingPage/LandingPage";
import LandingPageContainer from "../components/LandingPageContainer/LandingPageContainer";

const HomePage = () => {
    return (
        <>
            <LandingPageContainer>
                <LandingPage></LandingPage>
                <Auth></Auth>
            </LandingPageContainer>
        </>
    );
};

export default HomePage;
