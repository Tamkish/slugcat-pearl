import {slugcats} from "../model/types";
import {NavLink} from "react-router-dom";
import WorldMap from "./WorldMap";


const MapPage = () => {
    return (
        <div>
            <div>
                {
                    slugcats.map((slugcat, index) =>
                        <div className={"inline-block m-1"} key={index}>
                            <NavLink to={`/map/${slugcat}`}>

                                {slugcat}
                            </NavLink>
                        </div>
                    )
                }
            </div>
            <div className={"m-2"}>
                <WorldMap selectedSlugcat={"survivor"}/>
            </div>
        </div>
    )
}


export default MapPage;