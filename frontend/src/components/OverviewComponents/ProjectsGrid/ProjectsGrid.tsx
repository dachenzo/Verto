import styles from "./ProjectsGrid.module.css";

interface Props {
    children: React.ReactNode;
}

const ProjectsGrid = ({ children }: Props) => {
    return <div className={styles.projectsGrid}>{children}</div>;
};

export default ProjectsGrid;
