import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeCards } from "../components/pokeCards";
import { Poke } from "../components/poke";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokeCards />}></Route>
                <Route exact path='/poke/:name' element={<Poke />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}