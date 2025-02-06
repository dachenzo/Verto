import { Project } from "../../../customHooks/useProjects";
import OverviewFilters from "../OverviewFilters/OverviewFilters";
import OverviewHeader from "../OverviewHeader/OverviewHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";
import styles from "./Overview.module.css";

interface Props {
    data: Project[] | undefined;
}
const Overview = ({ data }: Props) => {
    return (
        <div className={styles.mainContent}>
            <OverviewHeader></OverviewHeader>
            <OverviewFilters></OverviewFilters>

            <ProjectsGrid>
                {data?.map((project) => (
                    <ProjectCard
                        projectId={project.projectId}
                        title={project.title}
                        completed={project.completed}
                        dueDate={project.dueDate}
                        key={project.projectId}
                    ></ProjectCard>
                ))}
            </ProjectsGrid>
        </div>
    );
};

export default Overview;
