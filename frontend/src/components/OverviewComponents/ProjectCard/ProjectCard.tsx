import { useNavigate } from "react-router-dom";
import ProgressBar, { progressCalculator } from "../../ProgressBar/ProgressBar";
import ProjectCardContainer from "../ProjectCardContainer/ProjectCardContainer";
import ProjectCardHeader from "../ProjectCardHeader/ProjectCardHeader";
import ProjectMeta from "../ProjectMeta/ProjectMeta";
import { Milestone } from "../../../customHooks/interfaces";

interface Props {
    title: string;
    completed: boolean;
    dueDate: string | undefined;
    projectId: number;
    milestones: Milestone[] | undefined;
}
const ProjectCard = ({
    title,
    completed,
    dueDate,
    projectId,
    milestones,
}: Props) => {
    const navigate = useNavigate();
    const percent = progressCalculator(milestones);
    return (
        <ProjectCardContainer
            navigate={() => navigate(`/project/${projectId}`)}
            projectId={projectId}
        >
            <ProjectCardHeader
                title={title}
                completed={completed}
            ></ProjectCardHeader>
            <ProgressBar percent={percent}></ProgressBar>
            <ProjectMeta dueDate={dueDate}></ProjectMeta>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
