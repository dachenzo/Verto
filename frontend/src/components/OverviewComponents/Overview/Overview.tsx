import OverviewFilters from "../OverviewFilters/OverviewFilters";
import OverviewHeader from "../OverviewHeader/OverviewHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";
import styles from "./Overview.module.css";

const Overview = () => {
    return (
        <div className={styles.mainContent}>
            <OverviewHeader></OverviewHeader>
            <OverviewFilters></OverviewFilters>
            <ProjectsGrid>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </ProjectsGrid>
        </div>
    );
};

export default Overview;
