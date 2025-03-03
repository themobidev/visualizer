import { useDndMonitor, useDroppable } from "@dnd-kit/core"
import "../css/Canvas.css"

const Canvas: React.FC = () => {
    const {setNodeRef} = useDroppable({
        id: "canvas",
        data: {
            accepts: ["TopLine"]
        }
    })

    useDndMonitor({
        onDragEnd: e => {
            console.log(e)
        }
    })

    return (
        <div className="canvas">
            <div className="title-bar">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
            <div ref={setNodeRef} className="canvas-body">
                
            </div>
        </div>
    )
}

export default Canvas