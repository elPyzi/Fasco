import styles from './Button.module.scss';

type ButtonProps = {
    children: string;
    padding?: string;
};

const Button = ({ children, padding }: ButtonProps) => {
    console.log(typeof children);
    return (
        <button type="button" className={styles.button} style={{ padding }}>
            {children}
        </button>
    );
};

export default Button;
