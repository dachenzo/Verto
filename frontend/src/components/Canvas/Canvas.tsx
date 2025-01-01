import styles from "./Canvas.module.css";

interface Props {
    children: React.ReactNode;
}
const Canvas = ({ children }: Props) => {
    return <div className={styles.canvas}>{children}</div>;
};

export default Canvas;
