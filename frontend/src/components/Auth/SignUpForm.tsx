import { useForm } from "react-hook-form";
import styles from "./Auth.module.css";
import useSignUp from "../../customHooks/useSignUp";

interface SignUpData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm = () => {
    const { error, signUp } = useSignUp();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpData>();

    const submit = ({ username, email, password }: SignUpData) => {
        signUp(email, password, username);
        console.log(error);
    };

    const password = watch("password");
    return (
        <form
            id="signupForm"
            className={styles.active}
            onSubmit={handleSubmit(submit)}
        >
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>UserName</label>
                <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Enter your Username"
                    {...register("username", {
                        required: "Username is required",
                    })}
                />
                {errors.username && (
                    <p className={styles.e}>{errors.username.message}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input
                    type="email"
                    className={styles.formInput}
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Email is required",
                    })}
                />
                {errors.email && (
                    <p className={styles.e}>{errors.email.message}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Password</label>
                <input
                    type="password"
                    className={styles.formInput}
                    placeholder="Create a password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
                {errors.password && (
                    <p className={styles.e}>{errors.password.message}</p>
                )}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>ConfirmPassword</label>
                <input
                    type="password"
                    className={styles.formInput}
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                        required: "ConfirmPassword",
                        validate: (value) => {
                            return value === password || "Passwords must match";
                        },
                    })}
                />
                {errors.confirmPassword && (
                    <p className={styles.e}>{errors.confirmPassword.message}</p>
                )}
            </div>
            <button type="submit" className={styles.authButton}>
                Sign Up
            </button>

            <div className={styles.authDivider}>or</div>

            <div className={styles.socialLogin}>
                <button type="button" className={styles.socialButton}>
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <path
                            fill="#4285F4"
                            d="M24 24v8.3h11.8c-1.1 5.7-5.7 8.3-11.8 8.3-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 7.3 29.5 5 24 5 13.5 5 5 13.5 5 24s8.5 19 19 19c11 0 18.3-7.3 18.3-18.3 0-1.2-.2-2.4-.3-3.7H24z"
                        />
                    </svg>
                    Google
                </button>
                <button type="button" className={styles.socialButton}>
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <path
                            fill="#000000"
                            d="M24 5C13.5 5 5 13.5 5 24s8.5 19 19 19 19-8.5 19-19S34.5 5 24 5zm7.8 19.3c0 .3-.3.6-.6.6h-3.3v11.4c0 .3-.3.6-.6.6h-2.2c-.3 0-.6-.3-.6-.6V24.9h-3.3c-.3 0-.6-.3-.6-.6v-2.2c0-.3.3-.6.6-.6h3.3v-3.3c0-4.6 2.8-7.1 6.9-7.1 1.9 0 3.5.1 3.9.2.3 0 .5.3.5.6v2c0 .3-.3.6-.6.6h-2.4c-2.2 0-2.7 1.1-2.7 2.7v3.3h5c.3 0 .6.3.6.6v2.2z"
                        />
                    </svg>
                    Facebook
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;
