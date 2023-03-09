import {Point, RegionBox} from "./regionTypes";

const defaultSize = 100 
const L = (size = defaultSize):Point => ({x:-size,y:0})
const R = (size = defaultSize):Point => ({x:size,y:0})
const U = (size = defaultSize):Point => ({x:0,y:-size})
const D = (size = defaultSize):Point => ({x:0,y:size})
const S = (size = defaultSize):Point[] => [R(size),D(size),L(size),U(size)]
const B = (width = defaultSize,height = defaultSize):Point[] =>[R(width),D(height),L(width),U(height)] 

export const regions: RegionBox[] =
    [
        {
            code: "OE",
            title: "Outer Expanse",
            position: {x: 30, y: 200},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "SB",
            title: "Subterranean",
            position: {x: 170, y: 500},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "DM",
            title: "Looks To The Moon",
            position: {x: 1350, y: 200},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "DS",
            title: "Drainage System",
            position: {x: 700, y: 650},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "SI",
            title: "Sky Islands",
            position: {x: 200, y: 30},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "LC",
            title: "Metropolis",
            position: {x: 900, y: 30},
            textPosition: {x: 10, y: 40},
            shape: B(100,50),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "SS",
            title: "Five Pebbles",
            position: {x: 900, y: 130},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "UW",
            title: "The Exterior",
            position: {x: 850, y: 210},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "GW",
            title: "Garbage Wastes",
            position: {x: 950, y: 450},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "CC",
            title: "Chimney Canopy",
            position: {x: 500, y: 100},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "SU",
            title: "Outskirts",
            position: {x: 400, y: 400},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "HI",
            title: "Industrial Complex",
            position: {x: 600, y: 400},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        {
            code: "VS",
            title: "Pipeyard",
            position: {x: 300, y: 200},
            textPosition: {x: 10, y: 40},
            shape: S(),
            bgColor: "#444",
            textColor: "#FFF",
        },
        
    ]
    //test