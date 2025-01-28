import ProgressBar from "../ProgressBar/ProgressBar";
import ProjectCardContainer from "../ProjectCardContainer/ProjectCardContainer";
import ProjectCardHeader from "../ProjectCardHeader/ProjectCardHeader";
import ProjectMeta from "../ProjectMeta/ProjectMeta";

const ProjectCard = () => {
    return (
        <ProjectCardContainer>
            <ProjectCardHeader></ProjectCardHeader>
            <ProgressBar></ProgressBar>
            <ProjectMeta></ProjectMeta>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
