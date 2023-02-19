import '../index.css';
import { allCollectibles } from '../model/data/collectibles';
import { CollectionButton } from './CollectionButton';
import { useParams } from "react-router-dom";
import React from "react";
import { CollectibleDisplay } from "./CollectibleDisplay";
import { gridRange, getIndex } from '../model/types';


export const CollectionGrid = () => {


    const { selectedId } = useParams();
    const { reader } = useParams();
    const isIdValid = !(isNaN(Number(selectedId)) || Number(selectedId) >= allCollectibles.length);
    const id = isIdValid ? Number(selectedId) : null;
    const selectedCollectible = allCollectibles[id ?? -1];


    return (
        <div className={"flex flex-col min-h-screen"}>
            <div className={"flex flex-row content-center justify-center"}>

                <div
                    className={`border-white border-2 font-bold grid gap-4 grid-flow-col grid-rows-[repeat(13,1fr)] w-fit rounded-2xl p-3 m-5 `}>
                    {
                        gridRange.cols.map(col =>
                            gridRange.rows.map(row =>
                                <CollectionButton
                                    key={getIndex(row, col)}
                                    index={getIndex(row, col)}
                                    isSelected={selectedId == getIndex(row, col).toString()}
                                />
                            )
                        )
                    }
                </div>
                <CollectibleDisplay collectibleId={id} />
            </div>
        </div>
    )
}
