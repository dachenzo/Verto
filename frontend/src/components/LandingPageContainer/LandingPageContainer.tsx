import styles from "./LandingPageContainer.module.css";

interface Props {
    children: React.ReactNode;
}

const LandingPageContainer = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>;
};

export default LandingPageContainer;
