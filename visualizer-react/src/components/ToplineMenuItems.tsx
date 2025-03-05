import "../css/ToplineMenuItems.css"
import topline1 from "../assets/element_image/topline1.png"
import topline2 from "../assets/element_image/topline2.png"
import topline3 from "../assets/element_image/topline3.png"
import topline4 from "../assets/element_image/topline4.png"
import topline5 from "../assets/element_image/topline5.png"
import topline6 from "../assets/element_image/topline6.png"
import topline7 from "../assets/element_image/topline7.png"
import { useDraggable } from "@dnd-kit/core"
import { DarkToplineElement, GrayToplineElement } from "./ToplineMenuElements"

export const GrayToplineMenuItem: React.FC = () => {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: "GrayToplineMenuItem",
        data: {
            type: "ToplineMenuItem",
            element: GrayToplineElement
        }
    })

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} className="sidemenu-item">
            <div className="name">GREY TOPLINE</div>
            <div className="image"><img src={topline1}></img></div>
        </div>
    )
}

export const DarkToplineMenuItem: React.FC = () => {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: "DarkToplineMenuItem",
        data: {
            type: "ToplineMenuItem",
            element: DarkToplineElement
        }
    })
    return (
        <div ref={setNodeRef} {...listeners} {...attributes} className="sidemenu-item">
            <div className="name">DARK TOPLINE</div>
            <div className="image"><img src={topline2}></img></div>
        </div>
    )
}

export const ColorTopline: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">COLOR TOPLINE</div>
            <div className="image"><img src={topline3}></img></div>
        </div>
    )
}

export const GrayToplineMenu: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">GREY TOPLINE MENU</div>
            <div className="image"><img src={topline4}></img></div>
        </div>
    )
}

export const DarkToplineMenu: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">DARK TOPLINE MENU</div>
            <div className="image"><img src={topline5}></img></div>
        </div>
    )
}

export const FullwidthLightTopline: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">FULLWIDTH LIGHT TOPLINE</div>
            <div className="image"><img src={topline6}></img></div>
        </div>
    )
}

export const FullwidthDarkTopline: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">FULLWIDTH DARK TOPLINE</div>
            <div className="image"><img src={topline7}></img></div>
        </div>
    )
}

export default [
    GrayToplineMenuItem, 
    DarkToplineMenuItem, 
    ColorTopline, 
    GrayToplineMenu, 
    DarkToplineMenu, 
    FullwidthLightTopline, 
    FullwidthDarkTopline
]