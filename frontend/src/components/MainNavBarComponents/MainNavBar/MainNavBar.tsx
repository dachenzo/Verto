import NavList from "../NavList/NavList";
import NavProfile from "../NavProfile/NavProfile";
import ProjectList from "../ProjectList/ProjectList";
import styles from "./MainNavBar.module.css";

const MainNavBar = () => {
    return (
        <nav className={styles.navSidebar}>
            <div className={styles.brand}>
                <div className={styles.brandLogo}></div>
                <div className={styles.brandName}>Verto</div>
            </div>
            <NavList></NavList>
            <ProjectList></ProjectList>
            <NavProfile></NavProfile>
        </nav>
    );
};

export default MainNavBar;
