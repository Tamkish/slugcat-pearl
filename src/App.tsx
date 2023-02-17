import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {CollectionGrid} from "./components/CollectionGrid";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<NavLink to={"collection"} className={"underline"}>collection</NavLink>}/>
                <Route path="/collection" element={<CollectionGrid/>}/>
                <Route path="/collection/:selectedId" element={<CollectionGrid/>}/>
                <Route path="/collection/:selectedId/:selectedReader" element={<CollectionGrid/>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default App
