import styles from "./FormCard.module.css";
//import SignUpForm from "../SignUpForm/SignUpForm";

interface Props {
    children: React.ReactNode;
}
const FormCard = ({ children }: Props) => {
    return <div className={styles.card}>{children}</div>;
};

export default FormCard;
