import NavList from "../NavList/NavList";
import NavProfile from "../NavProfile/NavProfile";
import ProjectList from "../ProjectList/ProjectList";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.navSidebar}>
            <div className={styles.brand}>
                <div className={styles.brandLogo}></div>
                <div className={styles.brandName}>TaskMaster</div>
            </div>
            <NavList></NavList>
            <ProjectList></ProjectList>
            <NavProfile></NavProfile>
        </nav>
    );
};

export default NavBar;
