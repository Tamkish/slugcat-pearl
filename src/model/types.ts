/*export const regionCodes = {
    //vanilla
    Outskirts: "SU",
    Drainage: "DS",
    Industrial: "HI",
    Garbage: "GW",
    Shoreline: "SL",
    Shaded: "SH",
    Exterior: "UW",
    FivePebbles: "SS",
    Chimney: "CC",
    SkyIslands: "SI",
    Farms: "LF",
    Subterranean: "SB",

    //downpour
    Pipeyard: "VS",
    OuterExpanse: "OE",
    Metropolis: "LC",
    Rot: "RM",
    Submerged: "MS", //shortened (Superstructure)
    Waterfront: "LM",
    LttM: "DM",
    Undergrowth: "UG",
    Silent: "CL",
    Rubicon: "HR",
} as const;*//*

export type RegionCode = typeof regionCodes[keyof typeof regionCodes]; // "SU" | "DS" | ...*/
/*type Region = {
    code: RegionCode;
    regionConnections: RegionConnection[];
}*/

export const slugcats = ["survivor" ,"monk" , "hunter" ,"gourmand" ,"artificer","rivulet" ,"spearmaster" , "saint"] as const;
export type Slugcat = typeof slugcats[number];
type CollectibleType = "pearl" | "broadcast";
export type Collectible = Pearl | Broadcast;

type CollectibleBase = {
    type: CollectibleType;
    nameColor: string;
    hexColor: string;
    roomName: string;
}




export const readers: Reader[] = ["FP", "BSM", "LttM"]
export type Reader = keyof PearlTexts;
type PearlTexts = {
    FP?: string[]; //five pebbles
    BSM?: string[]; //moon before collapse (white)
    LttM?: string[]; //moon after collapse (blue)
}
type Pearl = CollectibleBase & {
    type: "pearl";
    slugcats: Slugcat[];
    text: PearlTexts;
}
type Broadcast = CollectibleBase & {
    type: "broadcast";
    text: string[];
}

export const numberOfRows = 13;
export const numberOfCols = 5;

/// 1, 2, ... numberOfRows/Cols
export const gridRange = {
    rows: [...Array(numberOfRows).keys()],
    cols: [...Array(numberOfCols).keys()],
} as const;

export const getIndex = (row: number, col: number) => col * numberOfRows + row;
export const getAvailableSlugcats = (collectible: Collectible) => {
    if (collectible.type == "pearl") {
        return collectible.slugcats;
    } else {
        return [
            "spearmaster"
        ];
    }
}
export const STOMACH = "stomach";
export const PLACEHOLDER = "PLACEHOLDER";