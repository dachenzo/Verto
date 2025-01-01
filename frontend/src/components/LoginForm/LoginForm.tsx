import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";

interface Data {
    email: string;
    password: string;
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Data>({ mode: "onSubmit" });
    const submit: SubmitHandler<Data> = (data: Data) => console.log(data);
    return (
        <>
            <h1 className={styles.title}>Login</h1>
            <form action="" onSubmit={handleSubmit(submit)} noValidate>
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

                <button type="submit" className={styles.btn}>
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
