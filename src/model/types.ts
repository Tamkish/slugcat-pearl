export const regionCodes = {
    //vanilla
    Outskirts: "SU",
    DrainageSystem: "DS",
    IndustrialComplex: "HI",
    GarbageWastes: "GW",
    Shoreline: "SL",
    ShadedCitadel: "SH",
    TheExterior: "UW",
    FivePebbles: "SS",
    ChimneyCanopy: "CC",
    SkyIslands: "SI",
    FarmArrays: "LF",
    Subterranean: "SB",

    //downpour
    Pipeyard: "VS",
    OuterExpanse: "OE",
    Metropolis: "LC",
    TheRot: "RM",
    SubmergedStructure: "MS", //shortened (Superstructure)
    WaterfrontFacility: "LM",
    LooksToTheMoon: "DM",
    Undergrowth: "UG",
    SilentConstruct: "CL",
    Rubicon: "HR",
} as const;
export type RegionCode = typeof regionCodes[keyof typeof regionCodes]; // "SU" | "DS" | ...
type Region = {
    code: RegionCode;
    regionConnections: RegionConnection[];
}

export type Slugcat = "survivor" | "monk" | "hunter" | "gourmand" | "artificer" | "rivulet" | "spearmaster" | "saint";


type KarmaGate = {
    leftKarma: number;
    rightKarma: number;
}

type RegionConnection = {
    leftRegion: RegionCode;
    rightRegion: RegionCode;
    KarmaGate?: KarmaGate;
}

type CollectibleGridPosition = {
    row: number;
    col: number;
}




type CollectibleType = "pearl" | "broadcast";
export type Collectible = Pearl | Broadcast;

type CollectibleBase = {
    type: CollectibleType;
    hexColor: string;
    roomName: string,
}




export const readers : Reader[] = ["FP", "BSM", "LttM"]
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
