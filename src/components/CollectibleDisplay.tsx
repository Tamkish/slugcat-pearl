import React, {FC} from "react";
import {Reader, readers} from "../model/types";
import {allCollectibles, getAvailableSlugcats} from "../model/data/collectibles";
import {NavLink, useParams} from "react-router-dom";

type CollectibleDisplayProps = {
    collectibleId: number | null;
}

export const CollectibleDisplay: FC<CollectibleDisplayProps> = ({collectibleId}: CollectibleDisplayProps) => {

    const collectible = allCollectibles[collectibleId ?? -1];
    const {selectedReader} = useParams();

    return (

        <div className={"border-white border-2 w-96 rounded-2xl m-5 "}>
            {
                collectible == undefined
                    ?
                    (<div>
                        No Pearl Selected

                    </div>)
                    :
                    (<div>
                        <div>

                            <span>available for:</span>
                            {
                                getAvailableSlugcats(collectible).map((slugcat) =>
                                    <img
                                        key={slugcat}
                                        src={"/src/images/slugcats/" + slugcat + ".png"}
                                        alt={slugcat}
                                    />
                                )
                            }
                        </div>
                        <div>
                            <span>located in: {collectible.roomName}</span>
                        </div>
                        <div>
                            {
                                collectible.type == "pearl"
                                    ?
                                    <div>
                                        <div>

                                            {
                                                readers.map((reader, index) =>
                                                    collectible.text[reader] != null
                                                    &&
                                                    <NavLink
                                                        key={index}
                                                        className={`${selectedReader == reader ? "bg-gray-700" : ""}`}
                                                        to={`/collection/${collectibleId}/${reader}`}
                                                    >{reader}</NavLink>
                                                )
                                            }
                                        </div>
                                        {
                                            collectible.text[selectedReader as Reader]?.map((line, index) =>
                                                <div key={index}>
                                                    {line}
                                                </div>
                                            )

                                        }

                                    </div>
                                    :
                                    <div>
                                        brod
                                    </div>
                            }
                        </div>
                    </div>)
            }
        </div>
    )
}
