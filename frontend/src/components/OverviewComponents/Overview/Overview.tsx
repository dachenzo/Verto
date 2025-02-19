import { Project } from "../../../customHooks/interfaces";
import Spinner from "../../Spinner/Spinner";
import OverviewFilters from "../OverviewFilters/OverviewFilters";
import OverviewHeader from "../OverviewHeader/OverviewHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";
import styles from "./Overview.module.css";

interface Props {
    data: Project[] | null;
    loading: boolean;
}
const Overview = ({ data, loading }: Props) => {
    return (
        <div className={styles.mainContent}>
            <OverviewHeader></OverviewHeader>
            <OverviewFilters></OverviewFilters>
            {loading ? <Spinner height={""} width={""}></Spinner> : ""}
            <ProjectsGrid>
                {data?.map((project) => (
                    <ProjectCard
                        projectId={project.projectId}
                        title={project.title}
                        completed={project.completed}
                        dueDate={project.dueDate}
                        key={project.projectId}
                        milestones={project.milestones}
                    ></ProjectCard>
                ))}
            </ProjectsGrid>
        </div>
    );
};

export default Overview;
