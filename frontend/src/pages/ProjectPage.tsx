import { Outlet } from "react-router-dom";
import ProjectNavBar from "../components/ProjectNavBarComponents/ProjectNavBar/ProjectNavBar";
import ScreenBody from "../components/ScreenBody/ScreenBody";

const ProjectPage = () => {
    return (
        <>
            <ScreenBody>
                <ProjectNavBar></ProjectNavBar>
                <Outlet></Outlet>
            </ScreenBody>
        </>
    );
};

export default ProjectPage;
