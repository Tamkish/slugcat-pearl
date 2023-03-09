import React, { FC } from "react";
import { Reader, readers, getAvailableSlugcats } from '../model/types';
import { allCollectibles } from "../data/collectibles";
import { NavLink, useParams } from "react-router-dom";

type CollectibleDisplayProps = {
    collectibleId: number | null;
}

export const CollectibleDisplay: FC<CollectibleDisplayProps> = ({ collectibleId }: CollectibleDisplayProps) => {

    const collectible = allCollectibles[collectibleId ?? -1];
    const { selectedReader } = useParams();

    return (

        <div className={"border-white border-2 rounded-2xl m-5 p-3 w-[800px] text-center"}>
            {
                collectible == undefined
                    ?
                    (<div className=" text-center">
                        No Pearl Selected

                    </div>)
                    :
                    (<div>
                        <div>
                            <div
                                style={{
                                    color: "#" + collectible.hexColor,
                                }}
                                className="font-bold text-3xl"
                            >
                                {collectible.nameColor}
                            </div>
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
                                                <div key={index} className={"m-3"}>
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
