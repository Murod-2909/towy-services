import "./Button.scss";

function Button({
                    children,
                    type = "button",
                    variant = "primary",
                    size = "md",
                    disabled = false,
                    className = "",
                    onClick,
                }) {
    return (
        <button
            type={type}
            className={`btn btn--${variant} btn--${size} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
