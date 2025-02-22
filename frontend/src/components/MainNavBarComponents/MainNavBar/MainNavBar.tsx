import { Project } from "../../../customHooks/interfaces";
import LogOut from "../../LogOut/LogOut";
import NavList from "../NavList/NavList";
import NavProfile from "../NavProfile/NavProfile";
import ProjectList from "../ProjectList/ProjectList";
import styles from "./MainNavBar.module.css";

interface Props {
    projects: Project[] | null;
    loading: boolean;
}
const MainNavBar = ({ projects, loading }: Props) => {
    return (
        <nav className={styles.navSidebar}>
            <div className={styles.brand}>
                <div className={styles.brandLogo}></div>
                <div className={styles.brandName}>Verto</div>
            </div>
            <NavList></NavList>
            <ProjectList projects={projects} loading={loading}></ProjectList>
            <NavProfile></NavProfile>
            <LogOut></LogOut>
        </nav>
    );
};

export default MainNavBar;
