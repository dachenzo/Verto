import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <form className={styles.form} action="">
            <input
                type="text"
                placeholder="Search for Tasks"
                className={styles.bar}
            />
            <button className={styles.btn}>Search</button>
        </form>
    );
};

export default SearchBar;
