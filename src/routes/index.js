import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeCards } from "../components/pokeCards";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokeCards />}></Route>
                <Route exact path='/:name' element={<PokeCards />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}