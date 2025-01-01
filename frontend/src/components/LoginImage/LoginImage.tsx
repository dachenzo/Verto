import React from "react";
import styles from "./LoginImage.module.css";

interface Props {
    children: React.ReactNode;
}
const LoginImage = ({ children }: Props) => {
    return <div className={styles.imgdiv}>{children}</div>;
};

export default LoginImage;
