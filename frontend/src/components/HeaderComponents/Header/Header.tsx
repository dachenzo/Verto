import styles from "./Header.module.css";

interface Props {
    children: React.ReactNode;
}
const Header = ({ children }: Props) => {
    return <div className={styles.header}>{children}</div>;
};

export default Header;
