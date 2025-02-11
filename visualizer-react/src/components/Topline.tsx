import "../css/SidemenuItem.css"
import topLine1 from "../assets/element_image/topline1.png"
import topLine2 from "../assets/element_image/topline2.png"
import topLine3 from "../assets/element_image/topline3.png"
import topLine4 from "../assets/element_image/topline4.png"
import topLine5 from "../assets/element_image/topline5.png"
import topLine6 from "../assets/element_image/topline6.png"
import topLine7 from "../assets/element_image/topline7.png"
import { useState } from "react"
import { useDrag } from "react-dnd"
import TopLineElement from "./TopLineElement"

export const GrayTopLine: React.FC = () => {
    const [, dragRef] = useDrag(() => ({
        type: "TopLine",
        item: { id: "GrayTopLine", layout: <TopLineElement.GrayTopLineElement />},
    }))

    return (
        <div className="sidemenu-item">
            <div className="name">GREY TOPLINE</div>
            <div ref={e => {dragRef(e)}} className="image"><img src={topLine1}></img></div>
        </div>
    )
}

export const DarkTopLine: React.FC = () => {
    const [, dragRef] = useDrag(() => ({
        type: "TopLine",
        item: { id: "DarkTopLine", layout: <TopLineElement.DarkTopLineElement />},
    }))

    return (
        <div className="sidemenu-item">
            <div className="name">DARK TOPLINE</div>
            <div ref={e => {dragRef(e)}} className="image"><img src={topLine2}></img></div>
        </div>
    )
}

export const ColorTopLine: React.FC = () => {
    const [, dragRef] = useDrag(() => ({
        type: "TopLine",
        item: { id: "ColorTopLine", layout: <TopLineElement.ColorTopLineElement />},
    }))

    return (
        <div className="sidemenu-item">
            <div className="name">COLOR TOPLINE</div>
            <div ref={e => {dragRef(e)}} className="image"><img src={topLine3}></img></div>
        </div>
    )
}

export const GrayTopLineMenu: React.FC = () => {
    const [count, setCount] = useState(4);

    const [, dragRef] = useDrag(() => ({
        type: "TopLine",
        item: { id: "GrayTopLineMenu", layout: <TopLineElement.GrayTopLineMenuElement repeat={count} />},
    }),[count])

    return (
        <div className="sidemenu-item">
            <div className="name">GREY TOPLINE MENU</div>
            <div className="counter-wrapper">
                <div className="header">NUMBER OF MENU ITEMS</div>
                <div className="counter">
                    <div 
                        onClick={() => {
                            setCount(v => {
                                if(v>0) {v--}
                                return v
                            })
                        }} 
                        className="button"
                    >
                        -
                    </div>
                    <div className="count">{count}</div>
                    <div onClick={() => setCount(v => v+1)} className="button">+</div>
                </div>
            </div>
            <div ref={e => {dragRef(e)}} className="image"><img src={topLine4}></img></div>
        </div>
    )
}

export const DarkTopLineMenu: React.FC = () => {
    const [count, setCount] = useState(4);

    const [, dragRef] = useDrag(() => ({
        type: "TopLine",
        item: { id: "DarkTopLineMenu", layout: <TopLineElement.DarkTopLineMenuElement repeat={count} />},
    }),[count])

    return (
        <div className="sidemenu-item">
            <div className="name">DARK TOPLINE MENU</div>
            <div className="counter-wrapper">
                <div className="header">NUMBER OF MENU ITEMS</div>
                <div className="counter">
                    <div 
                        onClick={() => {
                            setCount(v => {
                                if(v>0) {v--}
                                return v
                            })
                        }} 
                        className="button"
                    >
                        -
                    </div>
                    <div className="count">{count}</div>
                    <div onClick={() => setCount(v => v+1)} className="button">+</div>
                </div>
            </div>
            <div ref={e => {dragRef(e)}} className="image"><img src={topLine5}></img></div>
        </div>
    )
}

export const FullwidthLightTopLine: React.FC = () => {
    const [, dragRef] = useDrag(() => ({
        type: "TopLine",
        item: { id: "FullwidthLightTopLine", layout: <TopLineElement.FullwidthLightTopLineElement />},
    }))

    return (
        <div className="sidemenu-item">
            <div className="name">FULLWIDTH LIGHT TOPLINE</div>
            <div ref={e => {dragRef(e)}} className="image"><img src={topLine6}></img></div>
        </div>
    )
}

export const FullwidthDarkTopLine: React.FC = () => {
    const [, dragRef] = useDrag(() => ({
        type: "TopLine",
        item: { id: "FullwidthDarkTopLine", layout: <TopLineElement.FullwidthDarkTopLineElement />},
    }))

    return (
        <div className="sidemenu-item">
            <div className="name">FULLWIDTH DARK TOPLINE</div>
            <div ref={e => {dragRef(e)}} className="image"><img src={topLine7}></img></div>
        </div>
    )
}

export default [
    GrayTopLine, 
    DarkTopLine, 
    ColorTopLine, 
    GrayTopLineMenu, 
    DarkTopLineMenu, 
    FullwidthLightTopLine, 
    FullwidthDarkTopLine
]