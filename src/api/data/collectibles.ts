import {Collectible} from "../api/types";

export const numberOfRows = 13;
export const numberOfCols = 5;

export const STOMACH = "stomach";

export const allCollectibles: Collectible[] =
    [
        {
            type: "pearl",
            hexColor: "a6e3ae",
            position: {row: 4, col: 3},
            slugcats: ["rivulet"],
            readers: ["WhiteMoon"],
            roomName: STOMACH
        }
    ];

