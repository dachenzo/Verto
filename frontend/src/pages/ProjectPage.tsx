import ProjectDetail from "../components/ProjectDetailComponents/ProjectDetail/ProjectDetail";
import ProjectNavBar from "../components/ProjectNavBarComponents/ProjectNavBar/ProjectNavBar";
import ScreenBody from "../components/ScreenBody/ScreenBody";

const ProjectPage = () => {
    return (
        <>
            <ScreenBody>
                <ProjectNavBar></ProjectNavBar>
                <ProjectDetail></ProjectDetail>
            </ScreenBody>
        </>
    );
};

export default ProjectPage;
