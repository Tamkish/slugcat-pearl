import {Collectible} from "../types";


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
            roomName: STOMACH,
            text: {
                Moon: "Oh! This is a very rare find, water dancer. This is a highly compressed schematic of an iterator superstructure!\n" +
                    "\n" +
                    "Where did you find this? I hope you didn’t plan to five this to the\n" +
                    "scavengers! I doubt they would value it as much as I would!~\n" +
                    "\n" +
                    "Hmm… let’s take a look!\n" +
                    "\n" +
                    "It seems this may have been a maintenance order, as one of the linear power rails is highlighted\n" +
                    "in the diagram, with a detailed path of approach outlined. The layout is unfamiliar to me.\n" +
                    "\n" +
                    "This is quite different from what I remember of my own structure. It looks as if it is using\n" +
                    "the newer lymphatic conduit water distribution system. Only the much later models had these.\n" +
                    "\n" +
                    "The only one near here would be Five Pebbles. I wonder how he is doing…\n" +
                    "It’s been a very long time since we were last in contact.\n" +
                    "\n" +
                    "Thank you for showing this to me, little creature.",
            }
        }
    ];

