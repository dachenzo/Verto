import styles from "./ProjectStatisticCard.module.css";

interface Props {
    statName: string;
    value: string;
}
const ProjectStatisticCard = ({ statName, value }: Props) => {
    return (
        <div className={styles.analyticsCard}>
            <div className={styles.analyticsNumber}>{value}</div>
            <div className={styles.analyticsLabel}>{statName}</div>
        </div>
    );
};

export default ProjectStatisticCard;
