import {Slugcat} from "../model/types";
import {regions} from "../data/regions";
import { Point } from "../data/regionTypes";


type WorldMapProps = {
    selectedSlugcat: Slugcat;


}

const shapeToPoints = (shape: Point[]) => {
    let points:Point[] = [];
    let lastPoint: Point = {x:0,y:0};
    shape.forEach(shapePoint => {
        let newPoint : Point = {x:lastPoint.x+shapePoint.x,y:lastPoint.y+shapePoint.y}
        points.push(newPoint)
        lastPoint = newPoint;
    }); 
    return points;
}

const WorldMap = ({selectedSlugcat}: WorldMapProps) => {

    return (
        <svg width={1500} height={800} className={"border"}>
            {
                regions.map((region, index) => {

                    const regionTitle =
                        selectedSlugcat == "saint"
                            ? region.coldTitle ?? region.title
                            : region.title;

                    return (<>
                            <polygon
                                fill={region.bgColor}
                                key={index}
                                points={shapeToPoints(region.shape).map(point => `${point.x+region.position.x},${point.y+region.position.y}`).join(" ")}
                            />
                            <text
                                x={region.position.x + region.textPosition.x}
                                y={region.position.y + region.textPosition.y}
                                fill={region.textColor}
                            >
                                    {regionTitle}
                            </text>
                        </>
                    )
                })
            }


        </svg>
    )
}

export default WorldMap;
