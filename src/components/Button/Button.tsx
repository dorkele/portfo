import styles from "./Button.module.css";

type ButtonProps = {
    type: "button" | "submit" | "reset" | undefined;
    text: string;
};

const Button = ({ type, text }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`text-outline-orange-fill ${styles.button}`}
        >
            <p className="text-outline text-outline-orange-fill">{text}</p>
        </button>
    );
};

export default Button;
