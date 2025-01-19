import LandingPage from "../components/LandingPage/LandingPage";
import LandingPageContainer from "../components/LandingPageContainer/LandingPageContainer";

const MainPage = () => {
    return (
        <>
            <LandingPageContainer>
                <LandingPage></LandingPage>
                <div style={{ color: "white" }}>Hello</div>
            </LandingPageContainer>
        </>
    );
};

export default MainPage;
