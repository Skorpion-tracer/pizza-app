import './index.css';
import Button from "./components/Button/Button.tsx";
import {MouseEvent} from "react";

function App() {
    const addCounter = (e: MouseEvent) => {
        console.log(e);
    }

    return (
        <>
            <Button onClick={addCounter}>Кнопка</Button>
        </>
    );
}

export default App;
