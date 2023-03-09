import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {CollectionGrid} from "./components/CollectionGrid";
import MapPage from "./components/MapPage";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <div>
                        <div>
                            <NavLink to={"/collection"} className={"underline"}>collection</NavLink>
                        </div>
                        <div>
                            <NavLink to={"/map"} className={"underline"}>map</NavLink>
                        </div>
                    </div>
                }/>
                <Route path="/collection" element={<CollectionGrid/>}/>
                <Route path="/collection/:selectedId" element={<CollectionGrid/>}/>
                <Route path="/collection/:selectedId/:selectedReader" element={<CollectionGrid/>}/>

                <Route path="/Map" element={<MapPage/>}/>
                <Route path="/Map/:slugcat" element={<MapPage/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
