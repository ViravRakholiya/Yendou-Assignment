import { ChakraProvider } from "@chakra-ui/react";
import { Counter } from "./components/Counter/Counter";
import { CounterProvider } from "./context/Counter/CounterProvider";

function App() {
    return (
        <ChakraProvider>
            <CounterProvider>
                <Counter />
            </CounterProvider>
        </ChakraProvider>
    );
}

export default App;
