import styles from "./Canvas.module.css";

interface Props {
    children: React.ReactNode;
}
const Canvas = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>;
};

export default Canvas;
