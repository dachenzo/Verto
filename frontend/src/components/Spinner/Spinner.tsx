import styles from "./Spinner.module.css";

interface Props {
    height: string;
    width: string;
}
const Spinner = ({ height, width }: Props) => {
    return (
        <div
            className={styles.loaderContainer}
            style={{
                height,
                width,
            }}
        >
            <div className={styles.loader}>
                <div className={styles.loaderRing}></div>
                <div className={styles.loaderRing}></div>
                <div className={styles.loaderText}>Loading...</div>
            </div>
        </div>
    );
};

export default Spinner;
