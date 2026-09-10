import './index.css';
import Authorization from "./components/Authorization/Authorization.tsx";
import {Route, Routes} from "react-router-dom";
import {Menu} from "./pages/Menu/Menu.tsx";
import {Cart} from "./pages/Cart/Cart.tsx";
import {Error} from "./pages/Error/Error.tsx";

function App() {

    return (
        <>
            <div>
                <a href="/">Menu</a>
                <a href="/cart">Cart</a>
            </div>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Authorization/>
        </>
    );
}

export default App;
