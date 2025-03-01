import { Button } from "../Button/Button";
import "./Counter.css";

export const Counter = () => {
    return (
        <div className="container">
            Current Counter: 0<Button>+1</Button>
        </div>
    );
};
