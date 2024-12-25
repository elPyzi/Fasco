import styles from './Button.module.scss';

type ButtonProps = {
    children: string;
    padding?: string;
    mb?: string;
};

const Button = ({ children, padding, mb }: ButtonProps) => {
    console.log(typeof children);
    return (
        <button
            type="button"
            className={styles.button}
            style={{ padding, marginBottom: mb }}
        >
            {children}
        </button>
    );
};

export default Button;
