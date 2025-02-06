import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar/ProgressBar";
import ProjectCardContainer from "../ProjectCardContainer/ProjectCardContainer";
import ProjectCardHeader from "../ProjectCardHeader/ProjectCardHeader";
import ProjectMeta from "../ProjectMeta/ProjectMeta";

interface Props {
    title: string;
    completed: boolean;
    dueDate: string | undefined;
    projectId: number;
}
const ProjectCard = ({ title, completed, dueDate, projectId }: Props) => {
    const navigate = useNavigate();

    return (
        <ProjectCardContainer
            navigate={() => navigate(`/project/${projectId}`)}
            projectId={projectId}
        >
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
