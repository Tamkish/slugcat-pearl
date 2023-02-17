import { FC } from "react";
import { allCollectibles } from '../model/data/collectibles';
import {NavLink} from "react-router-dom";

type CollectionButtonProps = {
    index: number;
    isSelected: boolean;
}

export const CollectionButton: FC<CollectionButtonProps> = ({ index, isSelected }: CollectionButtonProps) => {

    const collectible = allCollectibles.at(index);

    const invisible = collectible == undefined ? "invisible" : "";
    //console.log(collectible);

    return (

        <NavLink
            className={`${invisible} border border-white h-7 w-7 rounded-lg text-center`}
            style={{
                color: "#" + collectible?.hexColor,
                backgroundColor: isSelected? "gray":"black"
            }}
         to={"/collection/"+index}>

            {collectible?.type == "pearl"?"P":"B"}
        </NavLink>
    )
}