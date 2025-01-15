import styles from "./DashboardContainer.module.css";

interface Props {
    children: React.ReactNode;
}

const DashBoardContainer = ({ children }: Props) => {
    return <div className={styles.gridContainer}>{children}</div>;
};

export default DashBoardContainer;
