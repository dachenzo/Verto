import styles from "./ProjectCardContainer.module.css";

interface Props {
    children: React.ReactNode;
}

const ProjectCardContainer = ({ children }: Props) => {
    return <div className={styles.projectCard}>{children}</div>;
};

export default ProjectCardContainer;
