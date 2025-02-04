import ProgressBar from "../../ProgressBar/ProgressBar";
import ProjectCardContainer from "../ProjectCardContainer/ProjectCardContainer";
import ProjectCardHeader from "../ProjectCardHeader/ProjectCardHeader";
import ProjectMeta from "../ProjectMeta/ProjectMeta";

interface Props {
    title: string;
    completed: boolean;
    dueDate: string | undefined;
}
const ProjectCard = ({ title, completed, dueDate }: Props) => {
    return (
        <ProjectCardContainer>
            <ProjectCardHeader
                title={title}
                completed={completed}
            ></ProjectCardHeader>
            <ProgressBar></ProgressBar>
            <ProjectMeta dueDate={dueDate}></ProjectMeta>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
