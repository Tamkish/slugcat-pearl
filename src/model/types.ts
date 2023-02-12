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

type CollectibleReader = "5P" | "Moon" | "MoonPC";

type CollectibleType = "pearl" | "broadcast";
export type Collectible = Pearl | Broadcast;

type CollectibleBase = {
    type: CollectibleType;
    hexColor: string;
    position: CollectibleGridPosition;
    roomName: string,
}

type Pearl = CollectibleBase & {
    type: "pearl";
    slugcats: Slugcat[];
    text: {
        FP?: string[];
        Moon?: string[];
        MoonPC?: string[];
    }
}
type Broadcast = CollectibleBase & {
    type: "broadcast"
}
