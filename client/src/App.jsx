import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Signin from "./components/Signin"
import Register from "./components/Register"
import HomeProfile from "./components/HomeProfile";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/home" element={<HomeProfile/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
