import { createContext } from "react";

type CounterContextValue = {
    count: number;
    increment: () => void;
};

export const CounterContext = createContext<CounterContextValue>({
    count: 0,
    increment: () => {},
});
