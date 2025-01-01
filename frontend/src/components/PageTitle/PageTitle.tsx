import styles from "./PageTitle.module.css";

const PageTitle = () => {
    const metaData = true;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Task List</h1>
            {metaData && <p>8 tasks</p>}
        </div>
    );
};

export default PageTitle;
