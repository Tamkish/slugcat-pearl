import '../index.css';
import { allCollectibles, gridRange, numberOfRows, numberOfCols } from '../model/data/collectibles';
import { Collectible } from '../model/types';


export const CollectionGrid = () => {


    return (
        <div className={"border-white border-2 grid gap-4 grid-flow-row grid-cols-5 w-fit"} >
            {
                gridRange.rows.map(row =>

                    gridRange.cols.map(col => {


                        const collectible = allCollectibles.find(c =>
                            c.position.col == col &&
                            c.position.row == row
                        )


                        return (
                            <div key={row * numberOfRows + col}
                                className={`${collectible == undefined ? "invisible" : ""} border-2 border-white h-7 w-7 rounded-lg text-center`}
                                style={{ color: "#" + collectible?.hexColor }}
                            >
                                {collectible?.type == "pearl" ? "P" : "B"}
                            </div>
                        )

                    }
                    )
                )
            }
        </div >
    )
}