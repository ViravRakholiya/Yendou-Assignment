import { useCallback, useMemo, useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => setCount((prev) => prev + 1), []);

    const contextValue = useMemo(
        () => ({ count, increment }),
        [count, increment]
    );

    return (
        <CounterContext.Provider value={contextValue}>
            {children}
        </CounterContext.Provider>
    );
};
