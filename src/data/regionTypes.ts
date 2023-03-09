import {Slugcat} from "../model/types";

export type RegionCode = "SU" | "DS" |
    "HI" | "GW" | "SL" | "SH" |
    "UW" | "SS" | "CC" | "SI" |
    "LF" | "SB" | "VS" | "OE" |
    "LC" | "RM" | "MS" | "LM" |
    "DM" | "UG" | "CL" | "HR";

export type Point = {
    x: number;
    y: number;
}

interface Subregion {
    title: string;
    coldTitle?: string;
    position: Point;
    shape: Point[];
}

export interface RegionBox {
    code: RegionCode;
    title: string;
    coldTitle?: string;
    textPosition: Point;
    position: Point;
    shape: Point[];
    bgColor: string;
    textColor: string;
    exclusiveSlugcats?: Slugcat[];
    forbiddenSlugcats?: Slugcat[];
    subregions?: Subregion[];
}
