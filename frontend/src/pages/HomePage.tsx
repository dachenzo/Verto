import { useEffect } from "react";
import Auth from "../components/Auth/Auth";
import LandingPage from "../components/LandingPage/LandingPage";
import LandingPageContainer from "../components/LandingPageContainer/LandingPageContainer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/main");
        }
    }, [isLoggedIn, navigate]);
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
