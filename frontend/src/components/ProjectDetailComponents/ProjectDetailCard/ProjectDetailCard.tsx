import GenericWhiteCard from "../../GenericWhiteCard/GenericWhiteCard";
import ProjectDetailCardHeader from "../ProjectDetailCardHeader/ProjectDetailCardHeader";
import ProjectDetailMilestoneList from "../ProjectDetailMilestoneList/ProjectDetailMilestoneList";

const ProjectDetailCard = () => {
    return (
        <GenericWhiteCard>
            <ProjectDetailCardHeader></ProjectDetailCardHeader>
            <ProjectDetailMilestoneList></ProjectDetailMilestoneList>
        </GenericWhiteCard>
    );
};

export default ProjectDetailCard;
