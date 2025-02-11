import { useDrop } from "react-dnd"
import React, { JSX, useState } from "react"
import "../css/Canvas.css"

const Canvas: React.FC = () => {

    const [children, setChildren] = useState<JSX.Element[]>([])

    const [, dropRef] = useDrop(() => ({
        accept: ["TopLine"],
        drop: (item: {id: string, layout: JSX.Element}) => {
            setChildren(prev => [...prev, item.layout])
        }
    }), [children])

    return (
        <div className="canvas">
            <div className="title-bar">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
            <div ref={e => {dropRef(e)}} className="canvas-body">
                {children.map((e, i)=> React.cloneElement(e, {key: i}))}
            </div>
        </div>
    )
}

export default Canvas