import sharedStyles from "../sharedStyles.module.css";

const SearchLink = () => {
    return (
        <button className={`${sharedStyles.btn} ${sharedStyles.btnOutline}`}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
        </button>
    );
};

export default SearchLink;
