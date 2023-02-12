import { Collectible } from "../types";


export const numberOfRows = 13;
export const numberOfCols = 5;

/// 1, 2, ... numberOfRows/Cols
export const gridRange = {
    rows: [...Array(numberOfRows).keys()].map(n => n + 1),
    cols: [...Array(numberOfCols).keys()].map(n => n + 1),
} as const;


export const STOMACH = "stomach";

export const allCollectibles: Collectible[] =
    [
        {
            type: "pearl",
            hexColor: "a6e3ae",
            position: { row: 4, col: 3 },
            slugcats: ["rivulet"],
            roomName: STOMACH,
            text: {
                Moon:
                    [
                        "Oh! This is a very rare find, water dancer. This is a highly compressed schematic of an iterator superstructure!",
                        "Where did you find this? I hope you didn’t plan to five this to the scavengers! I doubt they would value it as much as I would!~",
                        "Hmm… let’s take a look!",
                        "It seems this may have been a maintenance order, as one of the linear power rails is highlighted in the diagram, with a detailed path of approach outlined. The layout is unfamiliar to me.",
                        "This is quite different from what I remember of my own structure. It looks as if it is using the newer lymphatic conduit water distribution system. Only the much later models had these.",
                        "The only one near here would be Five Pebbles. I wonder how he is doing… It’s been a very long time since we were last in contact.",
                        "Thank you for showing this to me, little creature.",
                    ]
            }
        }
    ];

