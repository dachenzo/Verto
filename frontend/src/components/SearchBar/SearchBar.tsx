import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <form className={styles.form} action="">
            <input
                type="text"
                placeholder="Search for Tasks"
                className={styles.bar}
            />
            <FaSearch className={styles.searchIcon}></FaSearch>
        </form>
    );
};

export default SearchBar;
