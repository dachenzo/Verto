import styles from "./ProgressBar.module.css";

export const progressCalculator = (
    items: { completed: boolean }[] | undefined
) => {
    if (items === undefined || items.length === 0) {
        console.log("here");
        return 0;
    }
    let count = 0;
    items.forEach((item) => {
        if (item.completed) {
            count += 1;
        }
    });

    return Math.floor((count / items.length) * 100);
};

interface Props {
    percent: number;
}

const ProgressBar = ({ percent }: Props) => {
    return (
        <div className={styles.projectProgress}>
            <div className={styles.progressHeader}>
                <span>Progress</span>
                <span>{percent}%</span>
            </div>
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
