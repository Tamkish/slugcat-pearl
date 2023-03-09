import {FC} from "react";
import {allCollectibles} from '../data/collectibles';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCircle, fas, faVolumeHigh} from "@fortawesome/free-solid-svg-icons";

library.add(fas,faCircle,faVolumeHigh)

type CollectionButtonProps = {
    index: number;
    isSelected: boolean;
}

export const CollectionButton: FC<CollectionButtonProps> = ({index, isSelected}: CollectionButtonProps) => {

    const collectible = allCollectibles.at(index);

    return (

        <NavLink
            className={`border border-white rounded-lg w-10 h-10`}
            style={{
                color: "#" + collectible?.hexColor,
                backgroundColor: isSelected ? "gray" : "black"
            }}
            to={"/collection/" + index}>

            {
                collectible?.type == "pearl"
                    ? <FontAwesomeIcon icon={"circle"} />
                    : <FontAwesomeIcon icon={"volume-high"}/>
            }
        </NavLink>
    )
}