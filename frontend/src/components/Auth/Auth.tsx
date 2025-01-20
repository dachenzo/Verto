import { useState } from "react";
import styles from "./Auth.module.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true);

    const handleFormSwitch = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <section className={styles.authSection}>
            <div className={styles.authContainer}>
                <div className={styles.authTabs}>
                    <div
                        className={`${styles.authTab} ${
                            isSignUp ? styles.active : ""
                        }`}
                        onClick={() => handleFormSwitch()}
                    >
                        Sign Up
                    </div>
                    <div
                        className={`${styles.authTab} ${
                            !isSignUp ? styles.active : ""
                        }`}
                        onClick={() => handleFormSwitch()}
                    >
                        Login
                    </div>
                </div>
                {isSignUp ? <SignUpForm></SignUpForm> : <LoginForm></LoginForm>}
            </div>
        </section>
    );
};

export default Auth;
