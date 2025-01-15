import styles from "./SignUpForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

{
    /* <label className={styles.formLabel} htmlFor="firstname">
                First Name
            </label>
            <input className={styles.formInput} id="firstname" type="text" />
            <label className={styles.formLabel} htmlFor="lastname">
                Last Name
            </label>
            <input className={styles.formInput} id="lastname" type="text" /> */
}

interface Data {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<Data>({ mode: "onBlur", reValidateMode: "onSubmit" });
    const submit: SubmitHandler<Data> = (data: Data) => console.log(data);
    return (
        <>
            <h1 className={styles.title}>Create Account</h1>
            <form
                className={styles.form}
                action=""
                onSubmit={handleSubmit(submit)}
                noValidate
            >
                <label className={styles.formLabel} htmlFor="displayName">
                    Display Name
                </label>
                {errors.displayName && (
                    <p className={styles.e}>{errors.displayName.message}</p>
                )}
                <input
                    {...register("displayName", {
                        required: "Display Name is Required",
                    })}
                    className={styles.formInput}
                    name="displayName"
                    id="displayName"
                    type="text"
                />

                <label className={styles.formLabel} htmlFor="email">
                    Email
                </label>
                {errors.email && (
                    <p className={styles.e}>{errors.email.message}</p>
                )}
                <input
                    {...register("email", {
                        required: "Email is Required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email address",
                        },
                    })}
                    className={styles.formInput}
                    name="email"
                    id="email"
                    type="email"
                />
                <label className={styles.formLabel} htmlFor="password">
                    Password
                </label>
                {errors.password && (
                    <p className={styles.e}>{errors.password.message}</p>
                )}
                <input
                    {...register("password", {
                        required: "password is Required",
                        minLength: {
                            value: 7,
                            message: "Password must be atleast 7 characters",
                        },
                    })}
                    className={styles.formInput}
                    name="password"
                    id="password"
                    type="text"
                />
                <label className={styles.formLabel} htmlFor="confirmpassword">
                    Confirm Password
                </label>
                {errors.confirmPassword && (
                    <p className={styles.e}>{errors.confirmPassword.message}</p>
                )}
                <input
                    {...register("confirmPassword", {
                        required: "Confirm Password",
                        validate: (value) =>
                            value === (watch("password") ?? " ") ||
                            "Passwords do not match",
                    })}
                    className={styles.formInput}
                    name="confirmPassword"
                    id="confirmPassword"
                    type="text"
                />
                <button type="submit" className={styles.btn}>
                    Create
                </button>
            </form>
        </>
    );
};

export default SignUpForm;
