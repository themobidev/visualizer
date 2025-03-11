import { DarkToplineElement, GrayToplineElement } from "../components/ToplineMenuElements";
import { DarkToplineMenuItem, GrayToplineMenuItem } from "../components/ToplineMenuItems";

export type IdToElementType = {
    id: number | string,
    Element: React.FC<any>
}

export const TopLineMenuItemMap = {
    "GrayToplineMenuItem": GrayToplineMenuItem,
    "DarkToplineMenuItem": DarkToplineMenuItem,
}

export const AllMenuItemMap = {
    ...TopLineMenuItemMap
}

export const CategoryToMenuItem = {
    "": [],
    "Topline sections": Object.entries(TopLineMenuItemMap).map(([k, v]) => ({id: k, Element: v})),
    "Top Logo": [],
    "Headers": [],
    "Title Sections": [],
    "Intro Sections": [],
    "Action Sections": [],
    "Features sections": [],
    "Text Sections": [],
    "Block elements": [],
    "Contact Sections": [],
    "Footers": [],
    "Copyrights": [],
    "Carousels": [],
    "HTML elements": [],
    "Grid Elements": [],
    "Teasers": [],
    "Styled lists": [],
    "Bootstrap": []
}

export const TopLineMenuItemToElementMap = {
    "GrayToplineMenuItem": GrayToplineElement,
    "DarkToplineMenuItem": DarkToplineElement
}

export const AllMenuItemToElementMap = {
    ...TopLineMenuItemToElementMap
}

export const TopLineElementMap = {
    "GrayToplineElement": GrayToplineElement,
    "DarkToplineElement": DarkToplineElement,
}

export const AllElementMap = {
    ...TopLineElementMap
}