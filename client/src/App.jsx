import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Signin from "./components/Signin"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
