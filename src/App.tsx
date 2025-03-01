import { Counter } from "./components/Counter/Counter";
import { CounterProvider } from "./context/Counter/CounterProvider";

function App() {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
}

export default App;
