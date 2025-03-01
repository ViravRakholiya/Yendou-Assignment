import { MouseEventHandler, ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button className="btn" onClick={onClick}>
            {children}
        </button>
    );
};
