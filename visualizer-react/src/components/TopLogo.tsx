import "../css/SidemenuItem.css"
import topLogo1 from "../assets/element_image/toplogo1.png"
import topLogo2 from "../assets/element_image/toplogo2.png"
import topLogo3 from "../assets/element_image/toplogo3.png"
import topLogo4 from "../assets/element_image/toplogo4.png"
import topLogo5 from "../assets/element_image/toplogo5.png"
import topLogo6 from "../assets/element_image/toplogo6.png"

export const LightLeftTopLogo: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">LIGHT LEFT TOPLOGO</div>
            <div className="image"><img src={topLogo1}></img></div>
        </div>
    )
}

export const DarkLeftTopLogo: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">DARK LEFT TOPLOGO</div>
            <div className="image"><img src={topLogo2}></img></div>
        </div>
    )
}

export const LightCenterTopLogo1: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">LIGHT CENTER TOPLOGO</div>
            <div className="image"><img src={topLogo3}></img></div>
        </div>
    )
}

export const DarkCenterTopLogo1: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">DARK CENTER TOPLOGO</div>
            <div className="image"><img src={topLogo4}></img></div>
        </div>
    )
}

export const LightCenterTopLogo2: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">LIGHT CENTER TOPLOGO</div>
            <div className="image"><img src={topLogo5}></img></div>
        </div>
    )
}

export const DarkCenterTopLogo2: React.FC = () => {
    return (
        <div className="sidemenu-item">
            <div className="name">DARK CENTER TOPLOGO</div>
            <div className="image"><img src={topLogo6}></img></div>
        </div>
    )
}

export default [
    LightLeftTopLogo, 
    DarkLeftTopLogo, 
    LightCenterTopLogo1, 
    DarkCenterTopLogo1, 
    LightCenterTopLogo2, 
    DarkCenterTopLogo2, 
]