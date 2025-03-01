import { Button } from "../Button/Button";
import "./Counter.css";
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
    const { count, increment } = useCounter();

    return (
        <div className="container">
            Current Counter: {count}
            <Button onClick={increment}>+1</Button>
        </div>
    );
};
