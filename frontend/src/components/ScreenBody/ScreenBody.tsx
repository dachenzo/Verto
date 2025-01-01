import React from "react";
import styles from "./ScreenBody.module.css";

interface Props {
    children: React.ReactNode;
}

const ScreenBody = ({ children }: Props) => {
    return <div className={styles.screenbody}>{children}</div>;
};

export default ScreenBody;
